<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Providers;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Providers\Algolia;
use Nadir\MerchantBuddy\Providers\Contracts\Batchable;
use Nadir\MerchantBuddy\Providers\Contracts\HasSettings;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

/**
 * Test subclass that lets us inject a mock SearchClient.
 */
class TestableAlgolia extends Algolia {

	private $mock_client;

	public function set_mock_client( $client ): void {
		$this->mock_client = $client;
	}

	public function get_client(): \Algolia\AlgoliaSearch\Api\SearchClient {
		return $this->mock_client;
	}
}

class AlgoliaTest extends TestCase {

	private function stub_algolia_settings( ?array $settings = null ): void {
		$settings = $settings ?? array(
			'application_id' => 'test-app-id',
			'admin_api_key'  => 'test-admin-key',
			'search_api_key' => 'test-search-key',
		);

		Monkey\Functions\expect( 'get_option' )
			->with( 'merchant_buddy_algolia_provider_settings' )
			->andReturn( $settings );
	}

	private function make_algolia(): TestableAlgolia {
		$this->stub_algolia_settings();
		$algolia = new TestableAlgolia();
		$client  = Mockery::mock( \Algolia\AlgoliaSearch\Api\SearchClient::class );
		$algolia->set_mock_client( $client );
		return $algolia;
	}

	// ── Interface compliance (no instantiation needed) ───────────────

	public function test_implements_provider_interface(): void {
		$this->assertContains( ProviderInterface::class, class_implements( Algolia::class ) );
	}

	public function test_implements_batchable_interface(): void {
		$this->assertContains( Batchable::class, class_implements( Algolia::class ) );
	}

	public function test_uses_has_settings_trait(): void {
		$this->assertContains( HasSettings::class, class_uses( Algolia::class ) );
	}

	public function test_get_provider_slug(): void {
		$this->assertSame( 'algolia', Algolia::get_provider_slug() );
	}

	public function test_get_provider_label(): void {
		$this->assertSame( 'Algolia', Algolia::get_provider_label() );
	}

	// ── is_ready ─────────────────────────────────────────────────────

	public function test_is_ready_returns_true_when_keys_set(): void {
		$algolia = $this->make_algolia();

		$this->assertTrue( $algolia->is_ready() );
	}

	public function test_is_ready_returns_false_when_keys_missing(): void {
		$this->stub_algolia_settings( array() );

		$algolia = new Algolia();

		$this->assertFalse( $algolia->is_ready() );
	}

	// ── CRUD operations ──────────────────────────────────────────────

	public function test_create_item_calls_save_object(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'saveObject' )
			->with( 'products', array( 'id' => 1, 'name' => 'Test' ), array( 'objectIDKey' => 'id' ) )
			->once();

		$result = $algolia->create_item( array( 'id' => 1, 'name' => 'Test' ), 1, 'products' );

		$this->assertTrue( $result );
	}

	public function test_create_item_returns_false_on_exception(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'saveObject' )
			->andThrow( new \Exception( 'API error' ) );

		$logger = Mockery::mock( 'WC_Logger' );
		$logger->shouldReceive( 'error' )->once();
		Monkey\Functions\expect( 'wc_get_logger' )->andReturn( $logger );

		$result = $algolia->create_item( array( 'id' => 1 ), 1, 'products' );

		$this->assertFalse( $result );
	}

	public function test_update_item_calls_save_object(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'saveObject' )
			->with( 'orders', Mockery::any(), array( 'objectIDKey' => 'id' ) )
			->once();

		$result = $algolia->update_item( array( 'id' => 5 ), 5, 'orders' );

		$this->assertTrue( $result );
	}

	public function test_update_item_returns_false_on_exception(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'saveObject' )->andThrow( new \Exception( 'fail' ) );

		$logger = Mockery::mock( 'WC_Logger' );
		$logger->shouldReceive( 'error' )->once();
		Monkey\Functions\expect( 'wc_get_logger' )->andReturn( $logger );

		$this->assertFalse( $algolia->update_item( array( 'id' => 5 ), 5, 'orders' ) );
	}

	public function test_delete_item_calls_delete_object(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'deleteObject' )
			->with( 'customers', 10 )
			->once();

		$this->assertTrue( $algolia->delete_item( 10, 'customers' ) );
	}

	public function test_delete_item_returns_false_on_exception(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'deleteObject' )->andThrow( new \Exception( 'fail' ) );

		$logger = Mockery::mock( 'WC_Logger' );
		$logger->shouldReceive( 'error' )->once();
		Monkey\Functions\expect( 'wc_get_logger' )->andReturn( $logger );

		$this->assertFalse( $algolia->delete_item( 10, 'customers' ) );
	}

	// ── Batch operations ─────────────────────────────────────────────

	public function test_batch_update_items_maps_object_id(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$items = array(
			array( 'id' => 1, 'name' => 'A' ),
			array( 'id' => 2, 'name' => 'B' ),
		);

		$client->shouldReceive( 'saveObjects' )
			->with(
				'products',
				Mockery::on(
					function ( $mapped ) {
						return $mapped[0]['objectID'] === 1 && $mapped[1]['objectID'] === 2;
					}
				)
			)
			->once();

		$this->assertTrue( $algolia->batch_update_items( $items, 'products' ) );
	}

	public function test_batch_delete_items_calls_delete_objects(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'deleteObjects' )
			->with( 'orders', array( 1, 2, 3 ) )
			->once();

		$this->assertTrue( $algolia->batch_delete_items( array( 1, 2, 3 ), 'orders' ) );
	}

	public function test_batch_delete_items_returns_false_on_exception(): void {
		$algolia = $this->make_algolia();
		$client  = $algolia->get_client();

		$client->shouldReceive( 'deleteObjects' )->andThrow( new \Exception( 'fail' ) );

		$logger = Mockery::mock( 'WC_Logger' );
		$logger->shouldReceive( 'error' )->once();
		Monkey\Functions\expect( 'wc_get_logger' )->andReturn( $logger );

		$this->assertFalse( $algolia->batch_delete_items( array( 1 ), 'orders' ) );
	}

	// ── Fields / description ─────────────────────────────────────────

	public function test_get_fields_returns_three_fields(): void {
		$fields = Algolia::get_fields();

		$this->assertCount( 3, $fields );

		$names = array_column( $fields, 'name' );
		$this->assertContains( 'application_id', $names );
		$this->assertContains( 'search_api_key', $names );
		$this->assertContains( 'admin_api_key', $names );
	}

	public function test_application_id_field_is_public(): void {
		$fields = Algolia::get_fields();
		$app_id = array_values( array_filter( $fields, fn( $f ) => $f['name'] === 'application_id' ) )[0];

		$this->assertTrue( $app_id['public'] );
	}

	public function test_admin_api_key_field_is_not_public(): void {
		$fields    = Algolia::get_fields();
		$admin_key = array_values( array_filter( $fields, fn( $f ) => $f['name'] === 'admin_api_key' ) )[0];

		$this->assertFalse( $admin_key['public'] );
	}

	public function test_get_description_returns_string(): void {
		$this->assertIsString( Algolia::get_description() );
	}

	public function test_get_description_data_includes_link(): void {
		$data = Algolia::get_description_data();

		$this->assertArrayHasKey( 'link', $data );
		$this->assertArrayHasKey( 'url', $data['link'] );
	}
}
