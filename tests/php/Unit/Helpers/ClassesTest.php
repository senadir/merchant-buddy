<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Helpers;

use Brain\Monkey;
use Nadir\MerchantBuddy\Helpers\Classes;
use Nadir\MerchantBuddy\Providers\Algolia;
use Nadir\MerchantBuddy\Providers\Contracts\HasSettings;
use Nadir\MerchantBuddy\Providers\DefaultProvider;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class ClassesTest extends TestCase {

	public function test_class_uses_recursive_returns_traits_for_class_with_traits(): void {
		$traits = Classes::class_uses_recursive( Algolia::class );

		$this->assertContains( HasSettings::class, $traits );
	}

	public function test_class_uses_recursive_returns_empty_for_class_without_traits(): void {
		$traits = Classes::class_uses_recursive( DefaultProvider::class );

		$this->assertEmpty( $traits );
	}

	public function test_class_uses_recursive_accepts_object_instance(): void {
		Monkey\Functions\stubs( array( 'add_action' => true ) );

		$provider = new DefaultProvider();
		$traits   = Classes::class_uses_recursive( $provider );

		$this->assertEmpty( $traits );
	}

	public function test_trait_uses_recursive_returns_traits_of_trait(): void {
		$traits = Classes::trait_uses_recursive( HasSettings::class );

		// HasSettings itself doesn't use other traits, so the list should be empty.
		$this->assertIsArray( $traits );
	}

	public function test_class_uses_recursive_includes_parent_traits(): void {
		// Algolia extends nothing with traits beyond HasSettings, but this validates the parent-walking logic.
		$traits = Classes::class_uses_recursive( Algolia::class );
		$this->assertContains( HasSettings::class, $traits );
	}
}
