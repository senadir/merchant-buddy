<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Entities;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Entities\Contracts\Batchable;
use Nadir\MerchantBuddy\Entities\EntityInterface;
use Nadir\MerchantBuddy\Entities\Orders;
use Nadir\MerchantBuddy\Entities\Templates\DoubleRow;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class OrdersTest extends TestCase {

	private function make_provider(): ProviderInterface {
		return Mockery::mock( ProviderInterface::class );
	}

	private function make_order_mock( int $id = 42 ): \WC_Order {
		$date = Mockery::mock( \WC_DateTime::class );
		$date->shouldReceive( 'getTimestamp' )->andReturn( 1700000000 );

		$item = Mockery::mock( \WC_Order_Item::class );
		$item->shouldReceive( 'get_name' )->andReturn( 'Widget' );

		$order = Mockery::mock( \WC_Order::class );
		$order->shouldReceive( 'get_id' )->andReturn( $id );
		$order->shouldReceive( 'get_order_number' )->andReturn( (string) $id );
		$order->shouldReceive( 'get_status' )->andReturn( 'processing' );
		$order->shouldReceive( 'get_total' )->andReturn( '99.99' );
		$order->shouldReceive( 'get_customer_id' )->andReturn( 1 );
		$order->shouldReceive( 'get_date_created' )->andReturn( $date );
		$order->shouldReceive( 'get_date_modified' )->andReturn( $date );
		$order->shouldReceive( 'get_formatted_billing_full_name' )->andReturn( 'John Doe' );
		$order->shouldReceive( 'get_edit_order_url' )->andReturn( 'https://example.com/edit/' . $id );
		$order->shouldReceive( 'get_items' )->andReturn( array( $item ) );

		// Billing address
		$order->shouldReceive( 'get_billing_first_name' )->andReturn( 'John' );
		$order->shouldReceive( 'get_billing_last_name' )->andReturn( 'Doe' );
		$order->shouldReceive( 'get_billing_company' )->andReturn( '' );
		$order->shouldReceive( 'get_billing_email' )->andReturn( 'john@example.com' );
		$order->shouldReceive( 'get_billing_phone' )->andReturn( '555-1234' );
		$order->shouldReceive( 'get_billing_address_1' )->andReturn( '123 Main' );
		$order->shouldReceive( 'get_billing_address_2' )->andReturn( '' );
		$order->shouldReceive( 'get_billing_city' )->andReturn( 'Anytown' );
		$order->shouldReceive( 'get_billing_state' )->andReturn( 'CA' );
		$order->shouldReceive( 'get_billing_postcode' )->andReturn( '90210' );
		$order->shouldReceive( 'get_billing_country' )->andReturn( 'US' );

		return $order;
	}

	// ── Interface compliance ─────────────────────────────────────────

	public function test_implements_entity_interface(): void {
		$this->assertContains( EntityInterface::class, class_implements( Orders::class ) );
	}

	public function test_implements_batchable_interface(): void {
		$this->assertContains( Batchable::class, class_implements( Orders::class ) );
	}

	// ── Static identifiers ───────────────────────────────────────────

	public function test_get_entity_slug(): void {
		$this->assertSame( 'orders', Orders::get_entity_slug() );
	}

	public function test_get_entity_label(): void {
		$this->assertSame( 'Orders', Orders::get_entity_label() );
	}

	// ── Layout ───────────────────────────────────────────────────────

	public function test_layout_uses_double_row_template(): void {
		$entity = new Orders( $this->make_provider() );
		$layout = $entity->layout();

		$this->assertSame( DoubleRow::class, $layout['template'] );
	}

	public function test_layout_has_expected_bindings(): void {
		$entity   = new Orders( $this->make_provider() );
		$bindings = $entity->layout()['bindings'];

		$this->assertArrayHasKey( 'primary_image', $bindings );
		$this->assertArrayHasKey( 'primary_text', $bindings );
		$this->assertArrayHasKey( 'secondary_text', $bindings );
		$this->assertArrayHasKey( 'primary_action', $bindings );
	}

	// ── Hook registration ────────────────────────────────────────────

	public function test_init_hooks_registers_create_hooks(): void {
		Monkey\Actions\expectAdded( 'woocommerce_new_order' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_untrash_order' )->once();
		Monkey\Actions\expectAdded( 'untrashed_post' )->once();

		$entity = new Orders( $this->make_provider() );
		$entity->init_hooks();
	}

	public function test_init_hooks_registers_update_hooks(): void {
		Monkey\Actions\expectAdded( 'woocommerce_update_order' )->once();

		$entity = new Orders( $this->make_provider() );
		$entity->init_hooks();
	}

	public function test_init_hooks_registers_delete_hooks(): void {
		Monkey\Actions\expectAdded( 'woocommerce_delete_order' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_trash_order' )->once();
		Monkey\Actions\expectAdded( 'wp_trash_post' )->once();

		$entity = new Orders( $this->make_provider() );
		$entity->init_hooks();
	}

	// ── get_item_data ────────────────────────────────────────────────

	public function test_get_item_data_extracts_fields_from_order(): void {
		$order = $this->make_order_mock( 42 );

		Monkey\Functions\expect( 'get_option' )
			->with( 'date_format' )
			->andReturn( 'Y-m-d' );
		Monkey\Functions\expect( 'date_i18n' )
			->andReturn( '2023-11-14' );
		Monkey\Filters\expectApplied( 'merchant_buddy_orders_item_data' )
			->once()
			->andReturnFirstArg();

		$entity = new Orders( $this->make_provider() );
		$data   = $entity->get_item_data( $order );

		$this->assertSame( 42, $data['id'] );
		$this->assertSame( '#42', $data['order_number'] );
		$this->assertSame( 'processing', $data['status'] );
		$this->assertSame( '99.99', $data['total'] );
		$this->assertSame( 'John Doe', $data['full_name'] );
		$this->assertSame( array( 'Widget' ), $data['items'] );
	}

	public function test_get_item_data_returns_empty_array_for_non_order(): void {
		$entity = new Orders( $this->make_provider() );

		$this->assertSame( array(), $entity->get_item_data( new \stdClass() ) );
	}

	public function test_get_item_data_type_guard_rejects_array(): void {
		$entity = new Orders( $this->make_provider() );

		$this->assertSame( array(), $entity->get_item_data( array( 'id' => 1 ) ) );
	}

	// ── search ───────────────────────────────────────────────────────

	public function test_search_parses_email_prefix(): void {
		$provider = $this->make_provider();
		$entity   = new Orders( $provider );

		// We need to mock WC_Order_Query - it will be instantiated inside search().
		// Since the stub returns empty, we just verify no fatal.
		$result = $entity->search( 'email:test@example.com rest of query' );

		$this->assertIsArray( $result );
	}

	public function test_search_with_plain_query(): void {
		$entity = new Orders( $this->make_provider() );

		$result = $entity->search( 'some order query' );

		$this->assertIsArray( $result );
		$this->assertEmpty( $result );
	}

	// ── create_item ──────────────────────────────────────────────────

	public function test_create_item_calls_provider_when_order_exists(): void {
		$order = $this->make_order_mock( 10 );

		Monkey\Functions\expect( 'wc_get_order' )->with( 10 )->andReturn( $order );
		Monkey\Functions\expect( 'get_option' )->with( 'date_format' )->andReturn( 'Y-m-d' );
		Monkey\Functions\expect( 'date_i18n' )->andReturn( '2023-11-14' );
		Monkey\Filters\expectApplied( 'merchant_buddy_orders_item_data' )->andReturnFirstArg();

		$provider = $this->make_provider();
		$provider->shouldReceive( 'create_item' )
			->with( Mockery::type( 'array' ), 10, 'orders' )
			->once()
			->andReturn( true );

		$entity = new Orders( $provider );
		$entity->create_item( 10 );
	}

	public function test_create_item_skips_non_order(): void {
		Monkey\Functions\expect( 'wc_get_order' )->with( 5 )->andReturn( false );

		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'create_item' );

		$entity = new Orders( $provider );
		$entity->create_item( 5 );
	}

	// ── delete_item ──────────────────────────────────────────────────

	public function test_delete_item_skips_zero_id(): void {
		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'delete_item' );

		$entity = new Orders( $provider );
		$entity->delete_item( 0 );
	}

	public function test_delete_item_skips_non_order_post_type(): void {
		Monkey\Functions\expect( 'get_post_type' )->with( 99 )->andReturn( 'post' );
		Monkey\Functions\expect( 'wc_get_order' )->with( 99 )->andReturn( false );

		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'delete_item' );

		$entity = new Orders( $provider );
		$entity->delete_item( 99 );
	}
}
