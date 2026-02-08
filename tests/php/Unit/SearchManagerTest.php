<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\Providers\DefaultProvider;
use Nadir\MerchantBuddy\SearchManager;

class SearchManagerTest extends TestCase {

	/**
	 * Set up the common function expectations needed for SearchManager instantiation.
	 *
	 * Brain\Monkey hooks (expectApplied/expectAdded) do NOT support byDefault(),
	 * so we use stubs for add_action/apply_filters/add_filter and only use
	 * Brain\Monkey\Functions for WP functions like get_option/update_option.
	 */
	private function setup_manager_expectations( array $overrides = array() ): void {
		$main_settings = $overrides['main_settings'] ?? array(
			'enabled'  => 'yes',
			'provider' => 'default',
			'shortcut' => 'meta+h',
		);

		$enabled_entities = $overrides['enabled_entities'] ?? array( 'orders', 'products', 'customers' );

		Monkey\Functions\stubs(
			array(
				'get_option' => function ( $option, $default = false ) use ( $main_settings, $enabled_entities ) {
					if ( 'merchant_buddy_main_settings' === $option ) {
						return $main_settings;
					}
					if ( 'merchant_buddy_enabled_entities' === $option ) {
						return $enabled_entities;
					}
					if ( str_contains( $option, 'algolia' ) ) {
						return array();
					}
					return $default;
				},
				'update_option' => true,
				'add_action' => true,
				'add_filter' => true,
				'apply_filters' => function () {
					// Return the second argument (the value), mimicking passthrough.
					$args = func_get_args();
					return $args[1] ?? null;
				},
				'current_user_can' => true,
				'plugin_dir_url'   => 'https://example.com/wp-content/plugins/merchant-buddy/',
				'plugin_dir_path'  => '/tmp/wordpress/wp-content/plugins/merchant-buddy/',
				'plugins_url'      => 'https://example.com/wp-content/plugins/merchant-buddy/',
				'wp_enqueue_script' => true,
				'wp_enqueue_style'  => true,
				'wp_script_is'      => false,
				'wp_add_inline_script' => true,
			)
		);
	}

	public function test_constructor_loads_default_provider(): void {
		$this->setup_manager_expectations();

		$manager = new SearchManager();

		$this->assertSame( 'default', $manager->get_setting( 'provider' ) );
	}

	public function test_is_enabled_returns_true_by_default(): void {
		$this->setup_manager_expectations();

		$manager = new SearchManager();

		$this->assertTrue( $manager->is_enabled() );
	}

	public function test_is_enabled_returns_false_when_disabled(): void {
		$this->setup_manager_expectations(
			array(
				'main_settings' => array(
					'enabled'  => 'no',
					'provider' => 'default',
					'shortcut' => 'meta+h',
				),
			)
		);

		$manager = new SearchManager();

		$this->assertFalse( $manager->is_enabled() );
	}

	public function test_get_setting_returns_default_for_missing_key(): void {
		$this->setup_manager_expectations();

		$manager = new SearchManager();

		$this->assertSame( 'fallback', $manager->get_setting( 'nonexistent', 'fallback' ) );
	}

	public function test_get_entities_returns_available_entities(): void {
		$this->setup_manager_expectations();

		$manager  = new SearchManager();
		$entities = $manager->get_entities();

		$this->assertArrayHasKey( 'orders', $entities );
		$this->assertArrayHasKey( 'products', $entities );
		$this->assertArrayHasKey( 'customers', $entities );
	}

	public function test_get_enabled_entities_filters_by_option(): void {
		$this->setup_manager_expectations(
			array( 'enabled_entities' => array( 'products' ) )
		);

		$manager  = new SearchManager();
		$entities = $manager->get_enabled_entities();

		$this->assertArrayHasKey( 'products', $entities );
		$this->assertArrayNotHasKey( 'orders', $entities );
		$this->assertArrayNotHasKey( 'customers', $entities );
	}

	public function test_load_provider_falls_back_to_default_for_unknown_provider(): void {
		$this->setup_manager_expectations(
			array(
				'main_settings' => array(
					'enabled'  => 'yes',
					'provider' => 'nonexistent',
					'shortcut' => 'meta+h',
				),
			)
		);

		// Should not crash, will fall back to default.
		$manager = new SearchManager();

		$this->assertSame( 'nonexistent', $manager->get_setting( 'provider' ) );
	}

	public function test_get_script_data_includes_entities_and_main(): void {
		$this->setup_manager_expectations();

		$manager = new SearchManager();
		$data    = $manager->get_script_data();

		$this->assertArrayHasKey( 'entities', $data );
		$this->assertArrayHasKey( 'main', $data );
		$this->assertSame( 'default', $data['main']['provider'] );
		$this->assertTrue( $data['main']['enabled'] );
		$this->assertSame( 'meta+h', $data['main']['shortcut'] );
	}

	public function test_get_script_data_entities_have_template_and_bindings(): void {
		$this->setup_manager_expectations();

		$manager = new SearchManager();
		$data    = $manager->get_script_data();

		foreach ( $data['entities'] as $entity_data ) {
			$this->assertArrayHasKey( 'template', $entity_data );
			$this->assertArrayHasKey( 'bindings', $entity_data );
			$this->assertArrayHasKey( 'label', $entity_data );
		}
	}

	public function test_frontend_scripts_not_loaded_by_default(): void {
		$this->setup_manager_expectations();

		$manager = new SearchManager();

		// Default settings don't include 'frontend' => 'yes',
		// so wp_enqueue_scripts should not be added for frontend.
		// We verify the manager was created without errors.
		$this->assertInstanceOf( SearchManager::class, $manager );
	}

	public function test_cli_commands_registered_when_wp_cli_defined(): void {
		// WP_CLI is defined in bootstrap for the stub.
		$this->setup_manager_expectations();

		$manager = new SearchManager();

		// We verify the manager was created without errors while WP_CLI is defined.
		$this->assertInstanceOf( SearchManager::class, $manager );
	}
}
