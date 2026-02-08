<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit;

use Brain\Monkey;
use Mockery;
use Nadir\MerchantBuddy\SearchSettings;

class SearchSettingsTest extends TestCase {

	public function test_constructor_sets_id(): void {
		$settings = new SearchSettings();

		$this->assertSame( 'merchant-buddy', $settings->id );
	}

	public function test_constructor_sets_method_title(): void {
		$settings = new SearchSettings();

		$this->assertSame( 'Merchant Buddy', $settings->method_title );
	}

	public function test_constructor_registers_hooks(): void {
		Monkey\Actions\expectAdded( 'admin_enqueue_scripts' )->twice();
		Monkey\Actions\expectAdded( 'rest_api_init' )->once();

		new SearchSettings();
	}

	public function test_constructor_adds_plugin_action_links_filter(): void {
		Monkey\Filters\expectAdded( 'plugin_action_links_merchant-buddy/merchant-buddy.php' )->once();

		new SearchSettings();
	}

	public function test_get_field_default_returns_no_for_checkbox(): void {
		$settings = new SearchSettings();
		$field    = array( 'type' => 'checkbox' );

		$this->assertSame( 'no', $settings->get_field_default( $field ) );
	}

	public function test_get_field_default_returns_zero_for_number(): void {
		$settings = new SearchSettings();
		$field    = array( 'type' => 'number' );

		$this->assertSame( 0, $settings->get_field_default( $field ) );
	}

	public function test_get_field_default_returns_empty_string_for_text(): void {
		$settings = new SearchSettings();
		$field    = array( 'type' => 'text' );

		$this->assertSame( '', $settings->get_field_default( $field ) );
	}

	public function test_get_field_default_uses_explicit_default(): void {
		$settings = new SearchSettings();
		$field    = array( 'type' => 'text', 'default' => 'custom' );

		$this->assertSame( 'custom', $settings->get_field_default( $field ) );
	}

	public function test_add_plugin_action_links_appends_settings_link(): void {
		Monkey\Functions\expect( 'get_admin_url' )->andReturn( 'https://example.com/wp-admin/' );
		Monkey\Functions\expect( 'add_query_arg' )->andReturn( 'https://example.com/wp-admin/admin.php?page=wc-settings&tab=integration&section=merchant-buddy' );

		$settings = new SearchSettings();
		$links    = $settings->add_plugin_action_links( array( 'Deactivate' ) );

		$this->assertCount( 2, $links );
		$this->assertStringContainsString( 'Settings', $links[1] );
	}

	public function test_admin_options_outputs_container_div(): void {
		$settings = new SearchSettings();

		ob_start();
		$settings->admin_options();
		$output = ob_get_clean();

		$this->assertStringContainsString( 'merchant-buddy-settings-container', $output );
	}
}
