<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Providers;

use Brain\Monkey;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Providers\DefaultProvider;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class DefaultProviderTest extends TestCase {

	public function test_implements_provider_interface(): void {
		$this->assertContains(
			ProviderInterface::class,
			class_implements( DefaultProvider::class )
		);
	}

	public function test_get_provider_slug(): void {
		$this->assertSame( 'default', DefaultProvider::get_provider_slug() );
	}

	public function test_get_provider_label(): void {
		$this->assertSame( 'Default', DefaultProvider::get_provider_label() );
	}

	public function test_is_ready_returns_true(): void {
		Monkey\Actions\expectAdded( 'rest_api_init' )->once();

		$provider = new DefaultProvider();

		$this->assertTrue( $provider->is_ready() );
	}

	public function test_create_item_returns_true(): void {
		Monkey\Actions\expectAdded( 'rest_api_init' )->once();

		$provider = new DefaultProvider();

		$this->assertTrue( $provider->create_item( array( 'name' => 'test' ), 1, 'products' ) );
	}

	public function test_update_item_returns_true(): void {
		Monkey\Actions\expectAdded( 'rest_api_init' )->once();

		$provider = new DefaultProvider();

		$this->assertTrue( $provider->update_item( array( 'name' => 'test' ), 1, 'products' ) );
	}

	public function test_delete_item_returns_true(): void {
		Monkey\Actions\expectAdded( 'rest_api_init' )->once();

		$provider = new DefaultProvider();

		$this->assertTrue( $provider->delete_item( 1, 'products' ) );
	}
}
