<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Entities;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Entities\Contracts\Batchable;
use Nadir\MerchantBuddy\Entities\EntityInterface;
use Nadir\MerchantBuddy\Entities\Products;
use Nadir\MerchantBuddy\Entities\Templates\SingleRow;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class ProductsTest extends TestCase {

	private function make_provider(): ProviderInterface {
		return Mockery::mock( ProviderInterface::class );
	}

	private function make_product_mock( int $id = 100 ): \WC_Product {
		$date = Mockery::mock( \WC_DateTime::class );
		$date->shouldReceive( 'getTimestamp' )->andReturn( 1700000000 );

		$product = Mockery::mock( \WC_Product::class );
		$product->shouldReceive( 'get_id' )->andReturn( $id );
		$product->shouldReceive( 'get_name' )->andReturn( 'Cool Widget' );
		$product->shouldReceive( 'get_permalink' )->andReturn( 'https://example.com/product/cool-widget' );
		$product->shouldReceive( 'get_price' )->andReturn( '49.99' );
		$product->shouldReceive( 'get_stock_quantity' )->andReturn( 25 );
		$product->shouldReceive( 'get_status' )->andReturn( 'publish' );
		$product->shouldReceive( 'get_image_id' )->andReturn( 55 );
		$product->shouldReceive( 'get_category_ids' )->andReturn( array() );
		$product->shouldReceive( 'get_children' )->andReturn( array( 101, 102 ) );
		$product->shouldReceive( 'get_date_created' )->andReturn( $date );
		$product->shouldReceive( 'get_date_modified' )->andReturn( $date );

		return $product;
	}

	// ── Interface compliance ─────────────────────────────────────────

	public function test_implements_entity_interface(): void {
		$this->assertContains( EntityInterface::class, class_implements( Products::class ) );
	}

	public function test_implements_batchable_interface(): void {
		$this->assertContains( Batchable::class, class_implements( Products::class ) );
	}

	// ── Static identifiers ───────────────────────────────────────────

	public function test_get_entity_slug(): void {
		$this->assertSame( 'products', Products::get_entity_slug() );
	}

	public function test_get_entity_label(): void {
		$this->assertSame( 'Products', Products::get_entity_label() );
	}

	// ── Layout ───────────────────────────────────────────────────────

	public function test_layout_uses_single_row_template(): void {
		$entity = new Products( $this->make_provider() );
		$layout = $entity->layout();

		$this->assertSame( SingleRow::class, $layout['template'] );
	}

	public function test_layout_has_expected_bindings(): void {
		$entity   = new Products( $this->make_provider() );
		$bindings = $entity->layout()['bindings'];

		$this->assertArrayHasKey( 'primary_image', $bindings );
		$this->assertArrayHasKey( 'primary_text', $bindings );
		$this->assertArrayHasKey( 'primary_action', $bindings );
		$this->assertArrayHasKey( 'secondary_action', $bindings );
	}

	// ── Hook registration ────────────────────────────────────────────

	public function test_init_hooks_registers_expected_hooks(): void {
		Monkey\Actions\expectAdded( 'woocommerce_new_product' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_new_product_variation' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_process_product_meta' )->once();
		Monkey\Actions\expectAdded( 'untrashed_post' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_update_product' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_update_product_variation' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_update_product_meta' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_delete_product' )->once();
		Monkey\Actions\expectAdded( 'woocommerce_trash_product' )->once();
		Monkey\Actions\expectAdded( 'wp_trash_post' )->once();

		$entity = new Products( $this->make_provider() );
		$entity->init_hooks();
	}

	// ── get_item_data ────────────────────────────────────────────────

	public function test_get_item_data_extracts_product_fields(): void {
		$product = $this->make_product_mock( 100 );

		$post_type_obj             = new \stdClass();
		$post_type_obj->_edit_link = 'post.php?post=%d';

		Monkey\Functions\expect( 'wp_get_attachment_image_url' )->with( 55, 'thumbnail' )->andReturn( 'https://example.com/thumb.jpg' );
		Monkey\Functions\expect( 'get_post_type_object' )->with( 'product' )->andReturn( $post_type_obj );
		Monkey\Functions\expect( 'admin_url' )->andReturn( 'https://example.com/wp-admin/post.php?post=100&action=edit' );

		Monkey\Filters\expectApplied( 'merchant_buddy_products_item_data' )->andReturnFirstArg();

		$entity = new Products( $this->make_provider() );
		$data   = $entity->get_item_data( $product );

		$this->assertSame( 100, $data['id'] );
		$this->assertSame( 'Cool Widget', $data['name'] );
		$this->assertSame( '49.99', $data['price'] );
		$this->assertStringContainsString( '25 in stock', $data['stock_quantity'] );
		$this->assertStringContainsString( '2 variations', $data['variations_count'] );
	}

	public function test_get_item_data_stock_empty_when_null(): void {
		$date = Mockery::mock( \WC_DateTime::class );
		$date->shouldReceive( 'getTimestamp' )->andReturn( 1700000000 );

		$product = Mockery::mock( \WC_Product::class );
		$product->shouldReceive( 'get_id' )->andReturn( 100 );
		$product->shouldReceive( 'get_name' )->andReturn( 'Cool Widget' );
		$product->shouldReceive( 'get_permalink' )->andReturn( 'https://example.com/product/cool-widget' );
		$product->shouldReceive( 'get_price' )->andReturn( '49.99' );
		$product->shouldReceive( 'get_stock_quantity' )->andReturn( null );
		$product->shouldReceive( 'get_status' )->andReturn( 'publish' );
		$product->shouldReceive( 'get_image_id' )->andReturn( 0 );
		$product->shouldReceive( 'get_category_ids' )->andReturn( array() );
		$product->shouldReceive( 'get_children' )->andReturn( array( 101, 102 ) );
		$product->shouldReceive( 'get_date_created' )->andReturn( $date );
		$product->shouldReceive( 'get_date_modified' )->andReturn( $date );

		$post_type_obj             = new \stdClass();
		$post_type_obj->_edit_link = 'post.php?post=%d';

		Monkey\Functions\expect( 'wp_get_attachment_image_url' )->andReturn( '' );
		Monkey\Functions\expect( 'get_post_type_object' )->andReturn( $post_type_obj );
		Monkey\Functions\expect( 'admin_url' )->andReturn( '' );
		Monkey\Filters\expectApplied( 'merchant_buddy_products_item_data' )->andReturnFirstArg();

		$entity = new Products( $this->make_provider() );
		$data   = $entity->get_item_data( $product );

		$this->assertSame( '', $data['stock_quantity'] );
	}

	public function test_get_item_data_no_variations_when_no_children(): void {
		$date = Mockery::mock( \WC_DateTime::class );
		$date->shouldReceive( 'getTimestamp' )->andReturn( 1700000000 );

		$product = Mockery::mock( \WC_Product::class );
		$product->shouldReceive( 'get_id' )->andReturn( 100 );
		$product->shouldReceive( 'get_name' )->andReturn( 'Cool Widget' );
		$product->shouldReceive( 'get_permalink' )->andReturn( 'https://example.com/product/cool-widget' );
		$product->shouldReceive( 'get_price' )->andReturn( '49.99' );
		$product->shouldReceive( 'get_stock_quantity' )->andReturn( 25 );
		$product->shouldReceive( 'get_status' )->andReturn( 'publish' );
		$product->shouldReceive( 'get_image_id' )->andReturn( 0 );
		$product->shouldReceive( 'get_category_ids' )->andReturn( array() );
		$product->shouldReceive( 'get_children' )->andReturn( array() );
		$product->shouldReceive( 'get_date_created' )->andReturn( $date );
		$product->shouldReceive( 'get_date_modified' )->andReturn( $date );

		$post_type_obj             = new \stdClass();
		$post_type_obj->_edit_link = 'post.php?post=%d';

		Monkey\Functions\expect( 'wp_get_attachment_image_url' )->andReturn( '' );
		Monkey\Functions\expect( 'get_post_type_object' )->andReturn( $post_type_obj );
		Monkey\Functions\expect( 'admin_url' )->andReturn( '' );
		Monkey\Filters\expectApplied( 'merchant_buddy_products_item_data' )->andReturnFirstArg();

		$entity = new Products( $this->make_provider() );
		$data   = $entity->get_item_data( $product );

		$this->assertSame( '', $data['variations_count'] );
	}

	// ── search ───────────────────────────────────────────────────────

	public function test_search_uses_data_store(): void {
		Monkey\Functions\stubs( array( 'wc_get_product' => null ) );

		$entity = new Products( $this->make_provider() );

		// WC_Data_Store stub returns empty array, so search() returns empty.
		$result = $entity->search( 'widget' );

		$this->assertIsArray( $result );
		$this->assertEmpty( $result );
	}

	// ── create_item ──────────────────────────────────────────────────

	public function test_create_item_calls_provider(): void {
		$product = $this->make_product_mock( 50 );

		Monkey\Functions\expect( 'wc_get_product' )->with( 50 )->andReturn( $product );

		$post_type_obj             = new \stdClass();
		$post_type_obj->_edit_link = 'post.php?post=%d';

		Monkey\Functions\expect( 'wp_get_attachment_image_url' )->andReturn( '' );
		Monkey\Functions\expect( 'get_post_type_object' )->andReturn( $post_type_obj );
		Monkey\Functions\expect( 'admin_url' )->andReturn( '' );
		Monkey\Filters\expectApplied( 'merchant_buddy_products_item_data' )->andReturnFirstArg();

		$provider = $this->make_provider();
		$provider->shouldReceive( 'create_item' )
			->with( Mockery::type( 'array' ), 50, 'products' )
			->once()
			->andReturn( true );

		$entity = new Products( $provider );
		$entity->create_item( 50 );
	}

	public function test_create_item_skips_non_product(): void {
		Monkey\Functions\expect( 'wc_get_product' )->with( 5 )->andReturn( false );

		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'create_item' );

		$entity = new Products( $provider );
		$entity->create_item( 5 );
	}

	// ── delete_item ──────────────────────────────────────────────────

	public function test_delete_item_skips_zero_id(): void {
		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'delete_item' );

		$entity = new Products( $provider );
		$entity->delete_item( 0 );
	}

	public function test_delete_item_skips_non_product_post_type(): void {
		Monkey\Functions\expect( 'get_post_type' )->with( 99 )->andReturn( 'post' );

		$provider = $this->make_provider();
		$provider->shouldNotReceive( 'delete_item' );

		$entity = new Products( $provider );
		$entity->delete_item( 99 );
	}

	public function test_delete_item_calls_provider_for_product(): void {
		Monkey\Functions\expect( 'get_post_type' )->with( 50 )->andReturn( 'product' );

		$provider = $this->make_provider();
		$provider->shouldReceive( 'delete_item' )
			->with( 50, 'products' )
			->once()
			->andReturn( true );

		$entity = new Products( $provider );
		$entity->delete_item( 50 );
	}
}
