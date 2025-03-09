<?php
declare( strict_types=1 );

namespace Nadir\MerchantBuddy\Providers\Contracts;

trait HasSettings {

	/**
	 * The settings for the provider.
	 *
	 * @var array
	 */
	protected $settings = array();

	/**
	 * The constructor.
	 */
	public function __construct() {
		$this->settings = static::get_settings();
	}

	/**
	 * Checks if the provider has settings.
	 *
	 * @return bool
	 */
	public function has_settings(): bool {
		return true;
	}

	/**
	 * Returns the settings for the provider.
	 */
	public static function get_settings() {
		return get_option( 'merchant_buddy_' . static::get_provider_slug() . '_provider_settings' );
	}

	/**
	 * Returns the description for the provider settings.
	 */
	public static function get_description() {
		return sprintf(
			/* translators: %s: provider name */
			__( 'Configure the settings for %s integration.', 'merchant-buddy' ),
			static::get_provider_label()
		);
	}

	/**
	 * Returns the fields for the provider settings.
	 */
	abstract public static function get_fields();
}
