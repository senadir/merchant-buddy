<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy;

use WC_Integration;
use Automattic\WooCommerce\Utilities\I18nUtil;
use Nadir\MerchantBuddy\Entities;
use Nadir\MerchantBuddy\Providers;
use Nadir\MerchantBuddy\Providers\Contracts\HasSettings;
use Nadir\MerchantBuddy\Helpers\Classes;


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * WC_Settings_Products.
 */
class SearchSettings extends WC_Integration {
	/**
	 * Constructor.
	 */
	public function __construct() {
		global $woocommerce;
		$this->id           = 'merchant-buddy';
		$this->method_title = __( 'Merchant Buddy', 'merchant-buddy' );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'hydrate_client_settings' ) );
		add_action( 'rest_api_init', array( $this, 'register_settings' ) );
		if ( defined( 'MERCHANT_BUDDY_BASENAME' ) ) {
			add_filter( 'plugin_action_links_' . MERCHANT_BUDDY_BASENAME, array( $this, 'add_plugin_action_links' ) );
		}
	}

	/**
	 * Get own sections.
	 *
	 * @return array
	 */
	protected function get_own_sections() {
		return array(
			'' => __( 'General', 'merchant-buddy' ),
		);
	}

	/**
	 * Admin options screen.
	 *
	 * See also WC_Shipping_Method::admin_options().
	 */
	public function admin_options() {
		global $hide_save_button;
		$hide_save_button = true;

		echo '<h2>' . esc_html__( 'Merchant Buddy', 'merchant-buddy' ) . '</h2>';
		echo '<div class="wrap"><div id="merchant-buddy-settings-container"></div></div>';
	}

	/**
	 * Hydrate client settings
	 */
	public function hydrate_client_settings() {
		$main_settings       = get_option(
			'merchant_buddy_main_settings',
			array(
				'provider' => 'default',
				'enabled'  => 'yes',
				'shortcut' => 'Cmd+K',
			)
		);
		$enabled_entities    = get_option( 'merchant_buddy_enabled_entities', array( 'orders', 'products', 'customers' ) );
		$available_providers = apply_filters( // phpcs:ignore WooCommerce.Commenting.CommentHooks.MissingHookComment
			'merchant_buddy_available_providers',
			array(
				'default' => Providers\DefaultProvider::class,
				'algolia' => Providers\Algolia::class,
			)
		);
		$available_entities  = apply_filters( // phpcs:ignore WooCommerce.Commenting.CommentHooks.MissingHookComment
			'merchant_buddy_available_entities',
			array(
				'orders'    => Entities\Orders::class,
				'products'  => Entities\Products::class,
				'customers' => Entities\Customers::class,
			)
		);

		$provider_settings_schema = array();
		$provider_settings        = array();
		foreach ( $available_providers as $provider ) {
			if ( in_array( HasSettings::class, Classes::class_uses_recursive( $provider ), true ) ) {
				$provider_settings_schema[ $provider::get_provider_slug() ] = array(
					'title'       => $provider::get_provider_label(),
					'description' => $provider::get_description(),
					'fields'      => $provider::get_fields(),
					'option_name' => 'merchant_buddy_' . $provider::get_provider_slug() . '_provider_settings',
				);

				$default_fields_values = array_reduce(
					$provider::get_fields(),
					function ( $acc, $field ) {
						$acc[ $field['name'] ] = $this->get_field_default( $field );
						return $acc;
					},
					array()
				);

				$saved_fields_values = get_option( 'merchant_buddy_' . $provider::get_provider_slug() . '_provider_settings', $default_fields_values );

				$provider_settings[ $provider::get_provider_slug() ] = wp_parse_args(
					$saved_fields_values,
					$default_fields_values
				);
			}
		}
		$settings = array(
			'enabled'                => wc_string_to_bool( $main_settings['enabled'] ),
			'provider'               => $main_settings['provider'] ?? 'default',
			'entities'               => $enabled_entities,
			'shortcut'               => $main_settings['shortcut'] ?? 'Cmd+K',
			'providerSettingsSchema' => $provider_settings_schema,
			'providerSettings'       => $provider_settings,
			'readonlySettings'       => array(
				'available_providers' => array_values(
					array_map(
						function ( $provider ) {
							return array(
								'key'  => $provider::get_provider_slug(),
								'name' => $provider::get_provider_label(),
							);
						},
						$available_providers
					)
				),
				'available_entities'  => array_values(
					array_map(
						function ( $entity ) {
							return array(
								'key'  => $entity::get_entity_slug(),
								'name' => $entity::get_entity_label(),
							);
						},
						$available_entities
					)
				),
			),
		);

		wp_add_inline_script(
			'merchant-buddy-settings',
			sprintf(
				'var hydratedScreenSettings = %s;',
				wp_json_encode( $settings )
			),
			'before'
		);
	}

	/**
	 * Register Local Pickup settings for rest api.
	 */
	public function register_settings() {
		register_setting(
			'options',
			'merchant_buddy_main_settings',
			array(
				'type'              => 'object',
				'description'       => 'Merchant Buddy Main Settings',
				'default'           => array(),
				'show_in_rest'      => array(
					'name'   => 'merchant_buddy_main_settings',
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							'enabled'  => array(
								'description' => __( 'If enabled, this method will appear on the block based checkout.', 'merchant-buddy' ),
								'type'        => 'string',
								'enum'        => array( 'yes', 'no' ),
							),
							'provider' => array(
								'description' => __( 'This controls the search provider.', 'merchant-buddy' ),
								'type'        => 'string',
							),
							'shortcut' => array(
								'description' => __( 'The keyboard shortcut to open the command palette.', 'merchant-buddy' ),
								'type'        => 'string',
							),
						),
					),
				),
				'sanitize_callback' => function ( $value ) {
					$existing = get_option( 'merchant_buddy_main_settings', array() );
					$sanitized = array(
						'enabled'  => isset( $value['enabled'] ) ? sanitize_text_field( $value['enabled'] ) : 'no',
						'provider' => isset( $value['provider'] ) ? sanitize_text_field( $value['provider'] ) : '',
						'shortcut' => isset($value['shortcut']) ? sanitize_text_field($value['shortcut']) : 'Cmd+K',
					);
					return array_merge( $existing, $sanitized );
				},
			)
		);
		register_setting(
			'options',
			'merchant_buddy_enabled_entities',
			array(
				'type'              => 'array',
				'description'       => 'Merchant Buddy Enabled Entities',
				'default'           => array(),
				'show_in_rest'      => array(
					'name'   => 'merchant_buddy_enabled_entities',
					'schema' => array(
						'type'  => 'array',
						'items' => array(
							'type' => 'string',
						),
					),
				),
				'sanitize_callback' => function ( $value ) {
					return array_map( 'sanitize_text_field', $value );
				},
			)
		);

		$available_providers = apply_filters( // phpcs:ignore WooCommerce.Commenting.CommentHooks.MissingHookComment
			'merchant_buddy_available_providers',
			array(
				'default' => Providers\DefaultProvider::class,
				'algolia' => Providers\Algolia::class,
			)
		);

		foreach ( $available_providers as $provider ) {
			if ( in_array( HasSettings::class, Classes::class_uses_recursive( $provider ), true ) ) {
				register_setting(
					'options',
					'merchant_buddy_' . $provider::get_provider_slug() . '_provider_settings',
					array(
						'type'              => 'object',
						'description'       => $provider::get_description(),
						'default'           => array(),
						'show_in_rest'      => array(
							'name'   => 'merchant_buddy_' . $provider::get_provider_slug() . '_provider_settings',
							'schema' => array(
								'type'       => 'object',
								'properties' => $this->get_provider_fields_schema( $provider::get_fields() ),
							),
						),
						'sanitize_callback' => function ( $value ) use ( $provider ) {
							return wp_parse_args(
								$value,
								get_option( 'merchant_buddy_' . $provider::get_provider_slug() . '_provider_settings', array() )
							);
						},
					)
				);
			}
		}
	}
	/**
	 * Enqueue scripts.
	 */
	public function enqueue_scripts() {
		$plugin_url        = plugin_dir_url( __DIR__ );
		$plugin_path       = plugin_dir_path( __DIR__ );
		$script_path       = 'build/settings.js';
		$script_asset_path = 'build/settings.asset.php';

		// Check if build files exist
		if ( ! file_exists( $plugin_path . $script_path ) ) {
			return;
		}
		$script_asset = file_exists( $plugin_path . $script_asset_path )
			? require $plugin_path . $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => filemtime( $plugin_path . $script_path ),
			);

		$script_url = plugins_url( $script_path, __DIR__ );

		// Enqueue main script and its dependencies
		wp_enqueue_script(
			'merchant-buddy-settings',
			$script_url,
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		// Enqueue styles if they exist
		if ( file_exists( $plugin_path . 'build/settings.css' ) ) {
			wp_enqueue_style(
				'merchant-buddy-settings',
				$plugin_url . 'build/settings.css',
				array(),
				$script_asset['version']
			);
		}
	}

	/**
	 * Get field default value.
	 *
	 * @param array $field Field.
	 * @return mixed
	 */
	public function get_field_default( $field ) {
		if ( ! isset( $field['default'] ) ) {
			switch ( $field['type'] ) {
				case 'checkbox':
					return 'no';
				case 'number':
					return 0;
				default:
					return '';
			}
		}
		return $field['default'];
	}

	/**
	 * Get provider fields schema.
	 *
	 * @param array $fields Fields.
	 * @return array
	 */
	private function get_provider_fields_schema( $fields ) {
		return array_reduce(
			$fields,
			function ( $acc, $field ) {
				$acc[ $field['name'] ] = array(
					'description' => $field['description'],
					'type'        => 'string',
				);
				if ( 'checkbox' === $field['type'] ) {
					$acc[ $field['name'] ]['enum'] = array( 'yes', 'no' );
				}

				if ( 'select' === $field['type'] ) {
					$acc[ $field['name'] ]['enum'] = array_map(
						function ( $option ) {
							return $option['name'];
						},
						$field['options']
					);
				}
				return $acc;
			},
			array()
		);
	}

	/**
	 * Add link to settings page from plugins page.
	 *
	 * @param array $links Links.
	 * @return array
	 */
	public function add_plugin_action_links( $links ) {
		// Build and escape the URL.
		$url = esc_url(
			add_query_arg(
				array(
					'page'    => 'wc-settings',
					'tab'     => 'integration',
					'section' => 'merchant-buddy',
				),
				get_admin_url() . 'admin.php'
			)
		);
		// Create the link.
		$settings_link = "<a href='$url'>" . __( 'Settings', 'merchant-buddy' ) . '</a>';
		// Adds the link to the end of the array.
		array_push(
			$links,
			$settings_link
		);
		return $links;
	}
}
