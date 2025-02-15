<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities;

use Nadir\MerchantBuddy\Entities\Contracts\Batchable;
use Nadir\MerchantBuddy\Entities\Templates\SingleRow;
use Exception;
use WC_Product;
use WP_Post;

/**
 * Products entity, manages hooking into product actions and formatting data.
 */
class Products extends AbstractEntity implements Batchable {
	/**
	 * Get the slug of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_slug(): string {
		return 'products';
	}

	/**
	 * Get the name of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_label(): string {
		return __( 'Products', 'merchant-buddy' );
	}

	/**
	 * Hook into the product actions.
	 *
	 * @return void
	 */
	public function init_hooks(): void {
		// Create a product item.
		add_action( 'woocommerce_new_product', array( $this, 'create_item' ), 10, 2 );
		add_action( 'woocommerce_new_product_variation', array( $this, 'create_item' ), 10, 2 );
		add_action( 'woocommerce_process_product_meta', array( $this, 'create_item' ), 10, 2 );
		add_action( 'untrashed_post', array( $this, 'create_item' ), 10, 1 );

		// Update a product item.
		add_action( 'woocommerce_update_product', array( $this, 'update_item' ), 10, 2 );
		add_action( 'woocommerce_update_product_variation', array( $this, 'update_item' ), 10, 2 );
		add_action( 'woocommerce_update_product_meta', array( $this, 'update_item' ), 10, 2 );
		// Delete a product item.
		add_action( 'woocommerce_delete_product', array( $this, 'delete_item' ), 10, 1 );
		add_action( 'woocommerce_trash_product', array( $this, 'delete_item' ), 10, 1 );
		add_action( 'wp_trash_post', array( $this, 'delete_item' ), 10, 1 );
	}

	/**
	 * Get the template for the order to be used in the command palette.
	 *
	 * @return array{template: string, bindings: array}
	 */
	public function layout(): array {
		return array(
			'template' => SingleRow::class,
			'bindings' => array(
				'primary_image'    => 'image_url',
				'primary_text'     => 'name',
				'secondary_text'   => array(
					'stock_quantity',
					'variations_count',
				),
				'primary_action'   => array(
					'label' => __( 'Edit', 'merchant-buddy' ),
					'url'   => 'edit_url',
				),
				'secondary_action' => array(
					'label' => __( 'View', 'merchant-buddy' ),
					'url'   => 'url',
				),
			),
		);
	}

	/**
	 * Create a product item.
	 *
	 * @param int                $product_id The ID of the product.
	 * @param WC_Product|WP_Post $product    The product object.
	 * @return void
	 */
	public function create_item( int $product_id = 0, $product = null ): void {
		$product = $product instanceof WC_Product ? $product : wc_get_product( $product_id );

		if ( ! $product ) {
			return;
		}

		$product_data = $this->get_item_data( $product );
		try {
			$this->provider->create_item( $product_data, $product_id, 'products' );
		} catch ( Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Creating product item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Update a product item.
	 *
	 * @param int                $product_id The ID of the product.
	 * @param WC_Product|WP_Post $product    The product object.
	 * @return void
	 */
	public function update_item( int $product_id, $product = null ): void {
		$product = $product instanceof WC_Product ? $product : wc_get_product( $product_id );

		if ( ! $product ) {
			return;
		}

		$product_data = $this->get_item_data( $product );

		try {
			$this->provider->update_item( $product_data, $product_id, 'products' );
		} catch ( Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Updating product item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Delete a product item.
	 *
	 * @param int $product_id The ID of the product.
	 * @return void
	 */
	public function delete_item( int $product_id = 0 ): void {
		if ( ! $product_id ) {
			return;
		}

		try {
			$this->provider->delete_item( $product_id, 'products' );
		} catch ( Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Deleting product item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Get the products to be used in batch operations.
	 *
	 * @param int $page The page number.
	 * @param int $per_page The number of items per page.
	 * @return array
	 */
	public function get_items( int $page = 1, int $per_page = 10 ): array {
		$products = wc_get_products(
			array(
				'limit' => $per_page,
				'page'  => $page,
			)
		);

		return array_map(
			array( $this, 'get_item_data' ),
			array_filter(
				$products,
				function ( $product ) {
					return $product instanceof WC_Product;
				}
			)
		);
	}

	/**
	 * Get the product data.
	 *
	 * @param WC_Product $product The product object.
	 * @return array
	 */
	public function get_item_data( $product ): array {
		$created_at = $product->get_date_created() ? $product->get_date_created()->getTimestamp() : strtotime( get_post_field( 'post_date', $product->get_id() ) );
		$updated_at = $product->get_date_modified() ? $product->get_date_modified()->getTimestamp() : $created_at;

		return array(
			'id'               => $product->get_id(),
			'name'             => $product->get_name(),
			'url'              => $product->get_permalink(),
			'edit_url'         => $this->get_product_edit_link( $product ),
			'price'            => $product->get_price(),
			'stock_quantity'   => $product->get_stock_quantity() ? sprintf( '%d in stock', $product->get_stock_quantity() ) : '',
			'variations_count' => count( $product->get_children() ) ? sprintf( '%d variations', count( $product->get_children() ) ) : '',
			'status'           => $product->get_status(),
			'image_url'        => $this->get_product_image_url( $product ),
			'categories'       => $this->get_product_categories( $product ),
			'created_at'       => $created_at,
			'updated_at'       => $updated_at,
		);
	}

	/**
	 * Get the product edit link.
	 *
	 * @param WC_Product $product The product object.
	 * @return string
	 */
	private function get_product_edit_link( $product ) {
		$action = '&action=edit';

		$post_type_object = get_post_type_object( 'product' );

		if ( $post_type_object->_edit_link ) {
			$link = admin_url( sprintf( $post_type_object->_edit_link . $action, $product->get_id() ) );
		} else {
			$link = '';
		}
		return $link;
	}

	/**
	 * Get the product categories.
	 *
	 * @param WC_Product $product The product object.
	 * @return array
	 */
	private function get_product_categories( $product ) {
		$categories = $product->get_category_ids();
		return array_map(
			function ( $category_id ) {
				$category = get_term( $category_id, 'product_cat' );
				return array(
					'id'   => $category->term_id,
					'name' => $category->name,
				);
			},
			$categories
		);
	}

	/**
	 * Get the product image URL.
	 *
	 * @param WC_Product $product The product object.
	 * @return string
	 */
	private function get_product_image_url( $product ) {
		$image_id = (int) $product->get_image_id();
		return wp_get_attachment_image_url( $image_id, 'full' );
	}

	/**
	 * Searches products for a given query
	 *
	 * @param string $query The query to search.
	 * @return array A list of products to return.
	 */
	public function search( string $query ): array {
		$data_store = \WC_Data_Store::load( 'product' );

		// This is mostly to appease the type checker.
		if ( ! method_exists( $data_store, 'search_products' ) ) {
			return array();
		}

		$product_ids = $data_store->search_products( $query, '', false, true, 5 );

		return array_map(
			array( $this, 'get_item_data' ),
			array_map(
				'wc_get_product',
				array_filter(
					$product_ids,
					function ( $product_id ) {
						return 0 !== $product_id;
					}
				)
			)
		);
	}
}
