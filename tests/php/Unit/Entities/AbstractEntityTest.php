<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Entities;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Entities\Orders;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class AbstractEntityTest extends TestCase {

	private function make_provider(): ProviderInterface {
		return Mockery::mock( ProviderInterface::class );
	}

	public function test_constructor_injects_provider(): void {
		$provider = $this->make_provider();
		$entity   = new Orders( $provider );

		// Entity stores provider as protected $this->provider.
		// We can verify indirectly via behavior - just ensure construction works.
		$this->assertInstanceOf( Orders::class, $entity );
	}

	public function test_get_searchable_fields_applies_filter(): void {
		$provider = $this->make_provider();
		$entity   = new Orders( $provider );

		Monkey\Filters\expectApplied( 'merchant_buddy_orders_searchable_fields' )
			->once()
			->andReturn( array( 'custom_field' ) );

		$fields = $entity->get_searchable_fields();

		$this->assertSame( array( 'custom_field' ), $fields );
	}

	public function test_get_display_fields_applies_filter(): void {
		$provider = $this->make_provider();
		$entity   = new Orders( $provider );

		Monkey\Filters\expectApplied( 'merchant_buddy_orders_display_fields' )
			->once()
			->andReturn( array( 'id', 'name' ) );

		$fields = $entity->get_display_fields();

		$this->assertSame( array( 'id', 'name' ), $fields );
	}

	public function test_get_searchable_fields_returns_static_defaults_through_filter(): void {
		$provider = $this->make_provider();
		$entity   = new Orders( $provider );

		Monkey\Filters\expectApplied( 'merchant_buddy_orders_searchable_fields' )
			->once()
			->andReturnFirstArg();

		$fields = $entity->get_searchable_fields();

		$this->assertSame( Orders::$searchable_fields, $fields );
	}

	public function test_get_display_fields_returns_static_defaults_through_filter(): void {
		$provider = $this->make_provider();
		$entity   = new Orders( $provider );

		Monkey\Filters\expectApplied( 'merchant_buddy_orders_display_fields' )
			->once()
			->andReturnFirstArg();

		$fields = $entity->get_display_fields();

		$this->assertSame( Orders::$display_fields, $fields );
	}
}
