<?php
/**
 * Plugin Name: Merchant Buddy
 * Plugin URI: https://merchant-buddy.com/
 * Description: Instantly available search palette for WooCommerce with instant search and keyboard shortcuts.
 * Version: 1.0.1
 * Requires at least: 6.4
 * Tested up to: 6.7
 * Requires PHP: 7.4
 * Author: Nadir Seghir
 * Author URI: https://nadir.blog
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: merchant-buddy
 * WC requires at least: 9.3
 * WC tested up to: 9.8
 * Requires Plugins: woocommerce
 *
 * @package MerchantBuddy
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'MERCHANT_BUDDY_BASENAME', plugin_basename( __FILE__ ) );

// Add compatibility with WooCommerce HPOS
add_action(
	'before_woocommerce_init',
	function () {
		if ( class_exists( \Automattic\WooCommerce\Utilities\FeaturesUtil::class ) ) {
			\Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility( 'custom_order_tables', __FILE__, true );
		}
	}
);

// Load Composer autoloader
if ( file_exists( plugin_dir_path( __FILE__ ) . 'vendor/autoload.php' ) ) {
	require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';
} else {
	// Handle the case where the autoloader is not found
	add_action(
		'admin_notices',
		function () {
			echo '<div class="error"><p>Merchant Buddy: Composer autoloader not found. Please run composer install.</p></div>';
		}
	);
	return;
}

use Nadir\MerchantBuddy\SearchManager;
use Nadir\MerchantBuddy\SearchSettings;
// Initiate SearchManager only if WooCommerce is active.
add_action(
	'plugins_loaded',
	function () {
		if ( ! class_exists( 'WooCommerce' ) ) {
			add_action(
				'admin_notices',
				function () {
						echo '<div class="error"><p>Merchant Buddy requires WooCommerce to be installed and enabled.</p></div>';
				}
			);
			return;
		}
		new SearchManager();
	}
);

add_filter(
	'woocommerce_integrations',
	function ( $integrations ) {
		$integrations[] = SearchSettings::class;
		return $integrations;
	}
);
