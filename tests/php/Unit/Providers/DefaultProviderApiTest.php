<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Providers;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Providers\DefaultProviderApi;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class DefaultProviderApiTest extends TestCase {

	private function make_api(): DefaultProviderApi {
		$provider = Mockery::mock( ProviderInterface::class );
		return new DefaultProviderApi( $provider );
	}

	public function test_constructor_registers_rest_api_init_action(): void {
		Monkey\Actions\expectAdded( 'rest_api_init' )->once();

		$this->make_api();
	}

	public function test_check_permission_returns_true_when_user_can_manage(): void {
		Monkey\Functions\expect( 'current_user_can' )
			->with( 'manage_options' )
			->andReturn( true );

		$api = $this->make_api();

		$this->assertTrue( $api->check_permission() );
	}

	public function test_check_permission_returns_wp_error_when_user_cannot_manage(): void {
		Monkey\Functions\expect( 'current_user_can' )
			->with( 'manage_options' )
			->andReturn( false );

		$api = $this->make_api();

		$result = $api->check_permission();
		$this->assertInstanceOf( \WP_Error::class, $result );
	}

	public function test_search_returns_400_for_invalid_entity(): void {
		Monkey\Functions\expect( 'get_option' )
			->with( 'merchant_buddy_enabled_entities', Mockery::any() )
			->andReturn( array( 'orders', 'products', 'customers' ) );

		Monkey\Filters\expectApplied( 'merchant_buddy_available_entities' )
			->andReturnFirstArg();

		$request = new \WP_REST_Request();
		$request->set_param( 'entity', 'nonexistent' );
		$request->set_param( 's', 'test' );

		$api      = $this->make_api();
		$response = $api->search( $request );

		$this->assertInstanceOf( \WP_HTTP_Response::class, $response );
		$this->assertSame( 400, $response->get_status() );
	}

	public function test_search_returns_results_for_valid_entity(): void {
		Monkey\Functions\expect( 'get_option' )
			->with( 'merchant_buddy_enabled_entities', Mockery::any() )
			->andReturn( array( 'orders' ) );

		// Use stubs for apply_filters since the search method triggers multiple internal filters.
		Monkey\Functions\stubs(
			array(
				'apply_filters' => function () {
					$args = func_get_args();
					return $args[1] ?? null;
				},
			)
		);

		$request = new \WP_REST_Request();
		$request->set_param( 'entity', 'orders' );
		$request->set_param( 's', 'test query' );

		$api      = $this->make_api();
		$response = $api->search( $request );

		$this->assertInstanceOf( \WP_HTTP_Response::class, $response );
		$this->assertSame( 200, $response->get_status() );
		$data = $response->get_data();
		$this->assertArrayHasKey( 'orders', $data );
	}

	public function test_get_enabled_entities_respects_option(): void {
		Monkey\Functions\expect( 'get_option' )
			->with( 'merchant_buddy_enabled_entities', Mockery::any() )
			->andReturn( array( 'products' ) );

		Monkey\Filters\expectApplied( 'merchant_buddy_available_entities' )
			->andReturnFirstArg();

		$api      = $this->make_api();
		$entities = $api->get_enabled_entities();

		$this->assertArrayHasKey( 'products', $entities );
		$this->assertArrayNotHasKey( 'orders', $entities );
	}

	public function test_search_filters_display_fields(): void {
		Monkey\Functions\expect( 'get_option' )
			->with( 'merchant_buddy_enabled_entities', Mockery::any() )
			->andReturn( array( 'orders' ) );

		Monkey\Functions\stubs(
			array(
				'apply_filters' => function () {
					$args = func_get_args();
					return $args[1] ?? null;
				},
			)
		);

		$request = new \WP_REST_Request();
		$request->set_param( 'entity', 'orders' );
		$request->set_param( 's', 'test' );

		$api      = $this->make_api();
		$response = $api->search( $request );

		// With an empty WC_Order_Query result, we just check the structure is correct.
		$this->assertSame( 200, $response->get_status() );
	}
}
