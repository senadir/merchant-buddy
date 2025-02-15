<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities;

use Nadir\MerchantBuddy\Entities\AbstractEntity;
use Nadir\MerchantBuddy\Entities\Contracts\Batchable;
use Nadir\MerchantBuddy\Entities\Templates\DoubleRowNoMedia;
use WC_Customer;
use WP_User;
/**
 * Class Customers
 *
 * Represents the Customers entity in the Command Palette for WP.
 */
class Customers extends AbstractEntity implements Batchable {

	/**
	 * Get the slug for the Customers entity.
	 *
	 * @return string
	 */
	public static function get_entity_slug(): string {
		return 'customers';
	}

	/**
	 * Get the name of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_label(): string {
		return __( 'Customers', 'merchant-buddy' );
	}

	/**
	 * Returns an array of what fields should be searchable, this depends on the provider. Sort by priority.
	 *
	 * @var array
	 */
	public static $searchable_fields = array(
		'name',
		'email',
		'phone',
		'meta',
	);

	/**
	 * Returns an array of fields that helps render the entity, if supported, the provider will only return those fields.
	 *
	 * @var array
	 */
	public static $display_fields = array(
		'name',
		'email',
		'phone',
		'account_url',
		'orders_url',
	);

	/**
	 * Define the layout for displaying customer information.
	 *
	 * @return array
	 */
	public function layout(): array {
		return array(
			'template' => DoubleRowNoMedia::class,
			'bindings' => array(
				'primary_text'     => 'name',
				'secondary_text'   => array(
					'email',
					'phone',
				),
				'primary_action'   => array(
					'label' => __( 'Edit', 'merchant-buddy' ),
					'url'   => 'account_url',
				),
				'secondary_action' => array(
					'label' => __( 'Orders', 'merchant-buddy' ),
					'url'   => 'orders_url',
				),
			),
		);
	}

	/**
	 * Initialize hooks for customer actions.
	 *
	 * @return void
	 */
	public function init_hooks(): void {
		// Create a customer item
		add_action( 'user_register', array( $this, 'create_item' ), 10, 1 );
		add_action( 'woocommerce_created_customer', array( $this, 'create_item' ), 10, 1 );

		// Update a customer item
		add_action( 'profile_update', array( $this, 'update_item' ), 10, 2 );
		add_action( 'woocommerce_customer_save_address', array( $this, 'update_item' ), 10, 1 );
		add_action( 'woocommerce_update_customer', array( $this, 'update_item' ), 10, 2 );
		add_action( 'woocommerce_after_customer_object_save', array( $this, 'update_item' ), 10, 1 );

		// Delete a customer item
		add_action( 'delete_user', array( $this, 'delete_item' ), 10, 1 );
	}

	/**
	 * Create an customer item.
	 *
	 * @param int $customer_id The ID of the customer.
	 * @return void
	 */
	public function create_item( int $customer_id = 0 ): void {
		$customer = new WC_Customer( $customer_id );

		$customer_data = $this->get_item_data( $customer );
		try {
			$this->provider->create_item( $customer_data, $customer_id, 'customers' );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Creating customer item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Update an customer item.
	 *
	 * @param mixed                    $customer_id The ID of the customer.
	 * @param WC_Customer|WP_User|null $customer The customer object.
	 * @return void
	 */
	public function update_item( $customer_id, $customer = null ): void {
		$customer      = $customer instanceof \WC_Customer ? $customer : new \WC_Customer( $customer_id );
		$customer_id   = $customer->get_id();
		$customer_data = $this->get_item_data( $customer );

		try {
			$this->provider->update_item( $customer_data, $customer_id, 'customers' );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Updating customer item failed with error: %s', $e->getMessage() ) );
		}
	}

	/**
	 * Delete an customer item.
	 *
	 * @param int $customer_id The ID of the customer.
	 * @return void
	 */
	public function delete_item( int $customer_id = 0 ): void {
		if ( ! $customer_id ) {
			return;
		}

		try {
			$this->provider->delete_item( $customer_id, 'customers' );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( sprintf( 'WooBuddy: Deleting customer item failed with error: %s', $e->getMessage() ) );
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
		$query = new \WP_User_Query(
			array(
				'fields' => 'ID',
				'number' => $per_page,
				'paged'  => $page,
			)
		);

		$display_fields = self::get_display_fields();
		return array_map(
			array( $this, 'get_item_data' ),
			array_map(
				function ( $customer_id ) {
					return new WC_Customer( $customer_id );
				},
				$query->get_results()
			)
		);
	}

	/**
	 * Search for customers based on the given query.
	 *
	 * @param string $query The search query.
	 * @return array
	 */
	public function search( string $query ): array {
		$data_store = \WC_Data_Store::load( 'customer' );

		// This is mostly to appease the type checker.
		if ( ! method_exists( $data_store, 'search_customers' ) ) {
			return array();
		}

		$customer_ids = $data_store->search_customers( $query, 5 );

		return array_map(
			array( $this, 'get_item_data' ),
			array_map(
				function ( $customer_id ) {
					return new \WC_Customer( $customer_id );
				},
				$customer_ids
			)
		);
	}

	/**
	 * Get the data for a customer.
	 *
	 * @param object|array $item The customer object.
	 * @return array
	 */
	public function get_item_data( $item ): array {
		if ( ! $item instanceof WC_Customer ) {
			return array();
		}

		return array(
			'id'          => $item->get_id(),
			'name'        => sprintf( '%s %s', $item->get_first_name(), $item->get_last_name() ),
			'email'       => $item->get_email(),
			'phone'       => $item->get_billing_phone() ? $item->get_billing_phone() : $item->get_shipping_phone(),
			'account_url' => get_edit_user_link( $item->get_id() ),
			'orders_url'  => 'meta://orders?search=email:' . $item->get_email(),
			'meta'        => array(
				'billing_address'  => array(
					'address_1' => $item->get_billing_address_1(),
					'address_2' => $item->get_billing_address_2(),
					'city'      => $item->get_billing_city(),
					'state'     => $item->get_billing_state(),
					'postcode'  => $item->get_billing_postcode(),
					'country'   => $item->get_billing_country(),
					'phone'     => $item->get_billing_phone(),
					'company'   => $item->get_billing_company(),
				),
				'shipping_address' => array(
					'address_1' => $item->get_shipping_address_1(),
					'address_2' => $item->get_shipping_address_2(),
					'city'      => $item->get_shipping_city(),
					'state'     => $item->get_shipping_state(),
					'postcode'  => $item->get_shipping_postcode(),
					'country'   => $item->get_shipping_country(),
					'phone'     => $item->get_shipping_phone(),
					'company'   => $item->get_shipping_company(),
				),
			),
		);
	}
}
