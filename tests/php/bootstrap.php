<?php
/**
 * PHPUnit bootstrap file for Merchant Buddy unit tests.
 */

// Composer autoloader (loads Brain\Monkey, Mockery, and plugin classes).
require_once dirname( __DIR__, 2 ) . '/vendor/autoload.php';

// WordPress / WooCommerce constants expected by the source code.
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/wordpress/' );
}
if ( ! defined( 'MERCHANT_BUDDY_BASENAME' ) ) {
	define( 'MERCHANT_BUDDY_BASENAME', 'merchant-buddy/merchant-buddy.php' );
}

// Load minimal class stubs so real source files can be parsed.
require_once __DIR__ . '/stubs/wc-stubs.php';
