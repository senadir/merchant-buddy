<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit;

use Brain\Monkey;
use Mockery\Adapter\Phpunit\MockeryPHPUnitIntegration;
use PHPUnit\Framework\TestCase as PHPUnitTestCase;

abstract class TestCase extends PHPUnitTestCase {

	use MockeryPHPUnitIntegration;

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();

		// Provide sensible defaults for very common WP functions.
		Monkey\Functions\stubs(
			array(
				'__'                => static function ( $text ) {
					return $text;
				},
				'esc_html__'        => static function ( $text ) {
					return $text;
				},
				'esc_html'          => static function ( $text ) {
					return $text;
				},
				'esc_attr'          => static function ( $text ) {
					return $text;
				},
				'esc_url'           => static function ( $url ) {
					return $url;
				},
				'sanitize_text_field' => static function ( $str ) {
					return $str;
				},
				'sanitize_email'    => static function ( $email ) {
					return $email;
				},
				'wp_parse_args'     => static function ( $args, $defaults = array() ) {
					return array_merge( $defaults, $args );
				},
				'wp_json_encode'    => static function ( $data ) {
					return json_encode( $data );
				},
				'rest_authorization_required_code' => static function () {
					return 401;
				},
				'absint'            => static function ( $val ) {
					return abs( (int) $val );
				},
			)
		);
	}

	protected function tearDown(): void {
		Monkey\tearDown();
		parent::tearDown();
	}
}
