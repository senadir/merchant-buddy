<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Entities;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Entities\Contracts\Batchable;
use Nadir\MerchantBuddy\Entities\Customers;
use Nadir\MerchantBuddy\Entities\EntityInterface;
use Nadir\MerchantBuddy\Entities\Templates\DoubleRowNoMedia;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class CustomersTest extends TestCase {

	private function make_provider(): ProviderInterface {
		return Mockery::mock( ProviderInterface::class );
	}

	private function make_customer_mock( int $id = 7 ): \WC_Customer {
		$customer = Mockery::mock( \WC_Customer::class );
		$customer->shouldReceive( 'get_id' )->andReturn( $id );
		$customer->shouldReceive( 'get_first_name' )->andReturn( 'Jane' );
		$customer->shouldReceive( 'get_last_name' )->andReturn( 'Smith' );
		$customer->shouldReceive( 'get_email' )->andReturn( 'jane@example.com' );
		$customer->shouldReceive( 'get_billing_phone' )->andReturn( '555-0001' );
		$customer->shouldReceive( 'get_shipping_phone' )->andReturn( '555-0002' );

		// Billing address
		$customer->shouldReceive( 'get_billing_address_1' )->andReturn( '456 Oak' );
		$customer->shouldReceive( 'get_billing_address_2' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_city' )->andReturn( 'Springfield' );
		$customer->shouldReceive( 'get_billing_state' )->andReturn( 'IL' );
		$customer->shouldReceive( 'get_billing_postcode' )->andReturn( '62701' );
		$customer->shouldReceive( 'get_billing_country' )->andReturn( 'US' );
		$customer->shouldReceive( 'get_billing_company' )->andReturn( '' );

		// Shipping address
		$customer->shouldReceive( 'get_shipping_address_1' )->andReturn( '456 Oak' );
		$customer->shouldReceive( 'get_shipping_address_2' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_city' )->andReturn( 'Springfield' );
		$customer->shouldReceive( 'get_shipping_state' )->andReturn( 'IL' );
		$customer->shouldReceive( 'get_shipping_postcode' )->andReturn( '62701' );
		$customer->shouldReceive( 'get_shipping_country' )->andReturn( 'US' );
		$customer->shouldReceive( 'get_shipping_company' )->andReturn( '' );

		return $customer;
	}

	// ── Interface compliance ─────────────────────────────────────────

	public function test_implements_entity_interface(): void {
		$this->assertContains( EntityInterface::class, class_implements( Customers::class ) );
	}

	public function test_implements_batchable_interface(): void {
		$this->assertContains( Batchable::class, class_implements( Customers::class ) );
	}

	// ── Static identifiers ───────────────────────────────────────────

	public function test_get_entity_slug(): void {
		$this->assertSame( 'customers', Customers::get_entity_slug() );
	}

	public function test_get_entity_label(): void {
		$this->assertSame( 'Customers', Customers::get_entity_label() );
	}

	// ── Layout ───────────────────────────────────────────────────────

	public function test_layout_uses_double_row_no_media_template(): void {
		$entity = new Customers( $this->make_provider() );
		$layout = $entity->layout();

		$this->assertSame( DoubleRowNoMedia::class, $layout['template'] );
	}

	public function test_layout_bindings(): void {
		$entity   = new Customers( $this->make_provider() );
		$bindings = $entity->layout()['bindings'];

		$this->assertArrayHasKey( 'primary_text', $bindings );
		$this->assertArrayHasKey( 'secondary_text', $bindings );
		$this->assertArrayHasKey( 'primary_action', $bindings );
		$this->assertArrayHasKey( 'secondary_action', $bindings );
	}

	// ── Hook registration ────────────────────────────────────────────

	public function test_init_hooks_registers_create_hooks(): void {
		Monkey\Actions\expectAdded( 'user_register' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_created_customer' )->once();

		$entity = new Customers( $this->make_provider() );
		$entity->init_hooks();
	}

	public function test_init_hooks_registers_update_hooks(): void {
		Monkey\Actions\expectAdded( 'profile_update' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_customer_save_address' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_update_customer' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_after_customer_object_save' )->once();

		$entity = new Customers( $this->make_provider() );
		$entity->init_hooks();
	}

	public function test_init_hooks_registers_delete_hook(): void {
		Monkey\Actions\expectAdded( 'delete_user' )->once();

		$entity = new Customers( $this->make_provider() );
		$entity->init_hooks();
	}

	// ── get_item_data ────────────────────────────────────────────────

	public function test_get_item_data_extracts_customer_fields(): void {
		$customer = $this->make_customer_mock( 7 );

		Monkey\Functions\expect( 'get_edit_user_link' )->with( 7 )->andReturn( 'https://example.com/user/7/edit' );
		Monkey\Filters\expectApplied( 'merchant_buddy_customers_item_data' )->andReturnFirstArg();

		$entity = new Customers( $this->make_provider() );
		$data   = $entity->get_item_data( $customer );

		$this->assertSame( 7, $data['id'] );
		$this->assertSame( 'Jane Smith', $data['name'] );
		$this->assertSame( 'jane@example.com', $data['email'] );
		$this->assertSame( '555-0001', $data['phone'] );
		$this->assertStringContainsString( 'jane@example.com', $data['orders_url'] );
	}

	public function test_get_item_data_returns_empty_for_non_customer(): void {
		$entity = new Customers( $this->make_provider() );

		$this->assertSame( array(), $entity->get_item_data( new \stdClass() ) );
	}

	public function test_get_item_data_falls_back_to_shipping_phone(): void {
		// Build a fresh mock with empty billing phone to test fallback.
		$customer = Mockery::mock( \WC_Customer::class );
		$customer->shouldReceive( 'get_id' )->andReturn( 7 );
		$customer->shouldReceive( 'get_first_name' )->andReturn( 'Jane' );
		$customer->shouldReceive( 'get_last_name' )->andReturn( 'Smith' );
		$customer->shouldReceive( 'get_email' )->andReturn( 'jane@example.com' );
		$customer->shouldReceive( 'get_billing_phone' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_phone' )->andReturn( '555-0002' );
		$customer->shouldReceive( 'get_billing_address_1' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_address_2' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_city' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_state' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_postcode' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_country' )->andReturn( '' );
		$customer->shouldReceive( 'get_billing_company' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_address_1' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_address_2' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_city' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_state' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_postcode' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_country' )->andReturn( '' );
		$customer->shouldReceive( 'get_shipping_company' )->andReturn( '' );

		Monkey\Functions\expect( 'get_edit_user_link' )->andReturn( '' );
		Monkey\Filters\expectApplied( 'merchant_buddy_customers_item_data' )->andReturnFirstArg();

		$entity = new Customers( $this->make_provider() );
		$data   = $entity->get_item_data( $customer );

		$this->assertSame( '555-0002', $data['phone'] );
	}

	// ── update_item - handles WC_Customer object as first param ──────

	public function test_update_item_handles_customer_object_as_first_param(): void {
		$customer = $this->make_customer_mock( 7 );

		Monkey\Functions\expect( 'get_edit_user_link' )->andReturn( '' );
		Monkey\Filters\expectApplied( 'merchant_buddy_customers_item_data' )->andReturnFirstArg();

		$provider = $this->make_provider();
		$provider->shouldReceive( 'update_item' )
			->with( Mockery::type( 'array' ), 7, 'customers' )
			->once()
			->andReturn( true );

		$entity = new Customers( $provider );
		// This is the bug path: woocommerce_after_customer_object_save passes WC_Customer as first arg.
		$entity->update_item( $customer );
	}

	public function test_update_item_handles_int_id_as_first_param(): void {
		// When called with integer ID, it creates a new WC_Customer from the stub.
		Monkey\Functions\expect( 'get_edit_user_link' )->andReturn( '' );
		Monkey\Filters\expectApplied( 'merchant_buddy_customers_item_data' )->andReturnFirstArg();

		$provider = $this->make_provider();
		$provider->shouldReceive( 'update_item' )
			->with( Mockery::type( 'array' ), Mockery::any(), 'customers' )
			->once()
			->andReturn( true );

		$entity = new Customers( $provider );
		$entity->update_item( 5 );
	}

	// ── delete_item ──────────────────────────────────────────────────

	public function test_delete_item_skips_zero_id(): void {
		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'delete_item' );

		$entity = new Customers( $provider );
		$entity->delete_item( 0 );
	}

	public function test_delete_item_calls_provider(): void {
		$provider = $this->make_provider();
		$provider->shouldReceive( 'delete_item' )
			->with( 8, 'customers' )
			->once()
			->andReturn( true );

		$entity = new Customers( $provider );
		$entity->delete_item( 8 );
	}

	// ── search ───────────────────────────────────────────────────────

	public function test_search_returns_array(): void {
		$entity = new Customers( $this->make_provider() );

		// WC_Data_Store stub returns empty.
		$result = $entity->search( 'jane' );

		$this->assertIsArray( $result );
	}
}
