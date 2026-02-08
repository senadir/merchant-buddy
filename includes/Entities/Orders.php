<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities;

use Nadir\MerchantBuddy\Entities\Contracts\Batchable;
use Nadir\MerchantBuddy\Entities\Templates\DoubleRow;
use WC_Order;

/**
 * Orders entity, manages hooking into order actions and formatting data.
 */
class Orders extends AbstractEntity implements Batchable {

	/**
	 * The display fields for the entity.
	 *
	 * @var array
	 */
	public static $display_fields = array(
		'order_number',
		'full_name',
		'created_at_formatted',
		'edit_url',
	);

	/**
	 * The searchable fields for the entity.
	 *
	 * @var array
	 */
	public static $searchable_fields = array(
		'order_number',
		'billing',
		'items',
	);

	/**
	 * Get the slug of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_slug(): string {
		return 'orders';
	}

	/**
	 * Get the name of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_label(): string {
		return __( 'Orders', 'merchant-buddy' );
	}

	/**
	 * Hook into the order actions.
	 *
	 * @return void
	 */
	public function init_hooks(): void {
		// Create an order item.
		add_action( 'woocommerce_new_order', array( $this, 'create_item' ), 10, 1 );
		add_action( 'woocommerce_untrash_order', array( $this, 'create_item' ), 10, 1 );
		add_action( 'untrashed_post', array( $this, 'create_item' ), 10, 1 );

		// Update an order item.
		add_action( 'woocommerce_update_order', array( $this, 'update_item' ), 10, 2 );

		// Delete an order item.
		add_action( 'woocommerce_delete_order', array( $this, 'delete_item' ), 10, 1 );
		add_action( 'woocommerce_trash_order', array( $this, 'delete_item' ), 10, 1 );
		add_action( 'wp_trash_post', array( $this, 'delete_item' ), 10, 1 );
	}

	/**
	 * Get the template for the order to be used in the command palette.
	 *
	 * @return array{template: string, bindings: array}
	 */
	public function layout(): array {
		return array(
			'template' => DoubleRow::class,
			'bindings' => array(
				'primary_image'  => 'icon:inbox',
				'primary_text'   => 'order_number',
				'secondary_text' => array(
					'full_name',
					'created_at_formatted',
				),
				'primary_action' => array(
					'label' => __( 'Edit', 'merchant-buddy' ),
					'url'   => 'edit_url',
				),
			),
		);
	}

	/**
	 * Searches order for a given query
	 *
	 * @param string $query The query to search.
	 * @return array A list of orders to return.
	 */
	public function search( string $query ): array {
		$args = array(
			'limit' => 10,
		);
		// Extract email from query if it's prefixed with "email:".
		if ( str_starts_with( $query, 'email:' ) ) {
			$parts = explode( ' ', $query, 2 );
			$email = trim( substr( $parts[0], 6 ) ); // Trim whitespace from email
			if ( ! empty( $email ) ) { // Only set billing_email if not empty
				$args['billing_email'] = sanitize_email( $email ); // Sanitize email
			}
			// Use the rest of the query (if any) for the 's' parameter
			$args['s'] = isset( $parts[1] ) ? trim( $parts[1] ) : '';
		} else {
			$args['s'] = trim( $query ); // Trim whitespace from general search query
		}

		$query = new \WC_Order_Query( $args );

		return array_map( array( $this, 'get_item_data' ), $query->get_orders() );
	}

	/**
	 * Create an order item.
	 *
	 * @param int $order_id The ID of the order.
	 * @return void
	 */
	public function create_item( int $order_id = 0 ): void {
		$order = wc_get_order( $order_id );

		// Guard against non-order post types from generic hooks like untrashed_post.
		if ( ! $order instanceof WC_Order ) {
			return;
		}

		$order_data = $this->get_item_data( $order );
		try {
			$this->provider->create_item( $order_data, $order_id, 'orders' );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Creating order item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Update an order item.
	 *
	 * @param int      $order_id The ID of the order.
	 * @param WC_Order $order The order object.
	 * @return void
	 */
	public function update_item( int $order_id, ?WC_Order $order = null ): void {
		$order = $order instanceof WC_Order ? $order : wc_get_order( $order_id );

		if ( ! $order ) {
			return;
		}

		$order_data = $this->get_item_data( $order );

		try {
			$this->provider->update_item( $order_data, $order_id, 'orders' );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Updating order item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Delete an order item.
	 *
	 * @param int $order_id The ID of the order.
	 * @return void
	 */
	public function delete_item( int $order_id = 0 ): void {
		if ( ! $order_id ) {
			return;
		}

		// Guard against non-order post types from generic hooks like wp_trash_post.
		if ( 'shop_order' !== get_post_type( $order_id ) && ! wc_get_order( $order_id ) ) {
			return;
		}

		try {
			if ( method_exists( $this->provider, 'delete_order' ) ) {
				$this->provider->delete_order( $order_id );
			} else {
				$this->provider->delete_item( $order_id, 'orders' );
			}
		} catch ( \Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Deleting order item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Get the orders to be used in batch operations.
	 *
	 * @param int $page The page number.
	 * @param int $per_page The number of items per page.
	 * @return array
	 */
	public function get_items( int $page = 1, int $per_page = 50 ): array {
		$orders = wc_get_orders(
			array(
				'limit' => $per_page,
				'page'  => $page,
				'type'  => 'shop_order',
			)
		);

		return array_map( array( $this, 'get_item_data' ), $orders );
	}

	/**
	 * Get the order data.
	 *
	 * @param WC_Order|object|array $item The order object.
	 * @return array
	 */
	public function get_item_data( $item ): array {
		if ( ! $item instanceof WC_Order ) {
			return array();
		}

		$order      = $item;
		$created_at = $order->get_date_created() ? $order->get_date_created()->getTimestamp() : strtotime( get_post_field( 'post_date', $order->get_id() ) );
		$updated_at = $order->get_date_modified() ? $order->get_date_modified()->getTimestamp() : $created_at;

		$data = array(
			'id'                   => $order->get_id(),
			'order_number'         => sprintf( '#%s', $order->get_order_number() ),
			'status'               => $order->get_status(),
			'total'                => $order->get_total(),
			'customer_id'          => $order->get_customer_id(),
			'billing'              => $this->get_address( $order, 'billing' ),
			'full_name'            => $order->get_formatted_billing_full_name(),
			'items'                => $this->get_order_items( $order ),
			'edit_url'             => $order->get_edit_order_url(),
			'created_at'           => $created_at,
			'created_at_formatted' => sprintf(
				// translators: %s is the date and time the order was placed.
				__( 'Placed on %s', 'merchant-buddy' ),
				date_i18n( get_option( 'date_format' ), $created_at ),
			),
			'updated_at'           => $updated_at,
		);

		return apply_filters( 'merchant_buddy_' . $this->get_entity_slug() . '_item_data', $data, $order );
	}

	/**
	 * Get the order items.
	 *
	 * @param WC_Order $order The order object.
	 * @return array
	 */
	protected function get_order_items( WC_Order $order ): array {
		$items = array();

		foreach ( $order->get_items() as $item ) {
			$items[] = $item->get_name();
		}

		return $items;
	}

	/**
	 * Get the address.
	 *
	 * @param WC_Order $order The order object.
	 * @param string   $type The type of address.
	 * @return array
	 */
	private function get_address( WC_Order $order, string $type ): array {
		if ( 'billing' === $type ) {
			return array(
				'first_name' => $order->get_billing_first_name(),
				'last_name'  => $order->get_billing_last_name(),
				'company'    => $order->get_billing_company(),
				'email'      => $order->get_billing_email(),
				'phone'      => $order->get_billing_phone(),
				'address_1'  => $order->get_billing_address_1(),
				'address_2'  => $order->get_billing_address_2(),
				'city'       => $order->get_billing_city(),
				'state'      => $order->get_billing_state(),
				'postcode'   => $order->get_billing_postcode(),
				'country'    => $order->get_billing_country(),
			);
		}

		return array(
			'first_name' => $order->get_shipping_first_name(),
			'last_name'  => $order->get_shipping_last_name(),
			'company'    => $order->get_shipping_company(),
			'address_1'  => $order->get_shipping_address_1(),
			'address_2'  => $order->get_shipping_address_2(),
			'city'       => $order->get_shipping_city(),
			'state'      => $order->get_shipping_state(),
			'postcode'   => $order->get_shipping_postcode(),
			'country'    => $order->get_shipping_country(),
			'phone'      => $order->get_shipping_phone(),
		);
	}
}
