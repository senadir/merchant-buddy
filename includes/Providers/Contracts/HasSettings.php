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
	public static function has_settings(): bool {
		return true;
	}

	/**
	 * Returns the settings for the provider.
	 */
	public function get_settings() {
		return get_option( static::get_option_name() );
	}

	/**
	 * Returns the description of the provider.
	 */
	public static function get_description() {
		return sprintf(
			/* translators: %s: Provider name */
			__( 'The %s search provider settings.', 'merchant-buddy' ),
			static::get_provider_label()
		);
	}

	/**
	 * Returns the option name for the provider settings.
	 */
	public static function get_option_name() {
		return 'woo_buddy_' . static::get_provider_slug() . '_settings';
	}

	/**
	 * Returns a list of fields to display in the settings tab.
	 *
	 * @see https://developer.woocommerce.com/docs/settings-api/
	 */
	abstract public static function get_fields();
}
