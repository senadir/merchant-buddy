<?php
declare( strict_types=1 );

namespace Nadir\MerchantBuddy;

use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
use Nadir\MerchantBuddy\Helpers\AdminNotice;
use Nadir\MerchantBuddy\Providers\Contracts\Batchable;
use Nadir\MerchantBuddy\Providers\Algolia;
use Nadir\MerchantBuddy\Providers\DefaultProvider;
use Nadir\MerchantBuddy\Providers\Contracts\HasSettings;
use Nadir\MerchantBuddy\Helpers\Classes;
use WP_CLI;
/**
 * SearchManager class
 *
 * This class manages the search functionality by loading the appropriate search provider based on the selected option.
 * It provides a method to search using the loaded provider.
 */
class SearchManager {

	/**
	 * Search provider
	 *
	 * @var ProviderInterface
	 */
	private $provider;

	/** Settings
	 *
	 * @var array
	 */
	private $settings;

	/**
	 * Entities
	 *
	 * @var array
	 */
	private $entities = array();

	/**
	 * Admin notices
	 *
	 * @var AdminNotice
	 */
	private $notices;

	/**
	 * Constructor
	 *
	 * Loads the search provider based on the selected option.
	 */
	public function __construct() {
		// @todo: inject this instead.
		$this->notices = new AdminNotice();
		$this->load_settings();
		if ( ! $this->is_enabled() ) {
			return;
		}

		$this->load_provider();
		$this->load_entities();
		$this->load_scripts();
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			$this->register_cli_commands();
		}
	}

	/**
	 * Load the settings.
	 */
	private function load_settings() {
		$settings       = get_option(
			'woo_buddy_main_settings',
			array(
				'enabled'  => false,
				'provider' => 'default',
			)
		);
		$this->settings = $settings;
	}

	/**
	 * Get a setting.
	 *
	 * @param string $key The key of the setting.
	 * @param mixed  $default_value The default value.
	 * @return mixed
	 */
	public function get_setting( $key, $default_value = null ) {
		return isset( $this->settings[ $key ] ) ? $this->settings[ $key ] : $default_value;
	}

	/**
	 * Check if the search is enabled.
	 *
	 * @return bool
	 */
	public function is_enabled() {
		return $this->get_setting( 'enabled', false );
	}


	/**
	 * Loads the search provider based on the selected option.
	 */
	private function load_provider() {
		$selected_provider = $this->get_setting( 'provider', 'default' );
		/**
		 * Filters the list of available search providers.
		 *
		 * @param array $providers An array of provider names and their corresponding class names.
		 * @since 1.0.0
		 */
		$providers = apply_filters(
			'woo_buddy_available_providers',
			array(
				'default' => DefaultProvider::class,
				'algolia' => Algolia::class,
			)
		);

		if ( 'default' === $selected_provider ) {
			$this->provider = new $providers['default']();
			return;
		}

		if ( ! isset( $providers[ $selected_provider ] ) || ! class_exists( $providers[ $selected_provider ] ) ) {
			$this->provider = new $providers['default']();
			$this->notices->add_notice( sprintf( 'WooBuddy: %s provider not found, fallback to default', $selected_provider ), 'error' );
			update_option( 'woo_buddy_search_provider', 'default' );
			return;
		}

		if ( ! class_exists( $providers[ $selected_provider ] ) || ! in_array( ProviderInterface::class, class_implements( $providers[ $selected_provider ] ), true ) ) {
			$this->provider = new $providers['default']();
			$this->notices->add_notice( sprintf( 'WooBuddy: %s provider does not implement ProviderInterface, fallback to default', $selected_provider ), 'error' );
			update_option( 'woo_buddy_search_provider', 'default' );
			return;
		}

		try {
			$this->provider = new $providers[ $selected_provider ]();
		} catch ( \Exception $e ) {
			$this->provider = new $providers['default']();
			$this->notices->add_notice( sprintf( 'WooBuddy: Initiating %s provider failed with error: %s, fallback to default', $selected_provider, $e->getMessage() ), 'error' );
			update_option( 'woo_buddy_search_provider', 'default' );
			return;
		}

		if ( ! $this->provider->is_ready() ) {
			$this->provider = new $providers['default']();
			$this->notices->add_notice( sprintf( 'WooBuddy: %s provider is not ready, fallback to default', $selected_provider ), 'error' );
			update_option( 'woo_buddy_search_provider', 'default' );
			return;
		}
		return true;
	}

	/**
	 * Get the available entities
	 *
	 * @return array
	 */
	public function get_entities() {
		/**
		 * Filters the list of available entities.
		 *
		 * @param array $entities An array of entity names and their corresponding class names.
		 * @since 1.0.0
		 */
		return apply_filters(
			'woo_buddy_available_entities',
			array(
				'orders'    => Entities\Orders::class,
				'products'  => Entities\Products::class,
				'customers' => Entities\Customers::class,
			)
		);
	}

	/**
	 * Get the enabled entities
	 *
	 * @return array
	 */
	public function get_enabled_entities() {

		$enabled_entities = get_option( 'woo_buddy_enabled_entities', array( 'orders', 'products', 'customers' ) );

		return array_intersect_key( $this->get_entities(), array_flip( $enabled_entities ) );
	}

	/**
	 * Initialize entities
	 */
	public function load_entities() {
		$enabled_entities = $this->get_enabled_entities();

		foreach ( $enabled_entities as $entity => $entity_class ) {
			try {
				$this->entities[ $entity ] = new $entity_class( $this->provider );
			} catch ( \Exception $e ) {
				$this->notices->add_notice( sprintf( 'WooBuddy: Initiating %s entity failed with error: %s, disabling it.', $entity, $e->getMessage() ), 'error' );
				update_option( 'woo_buddy_enabled_entities', array_diff( get_option( 'woo_buddy_enabled_entities' ), array( $entity ) ) );
				continue;
			}

			$this->entities[ $entity ]->init_hooks();
		}
	}

	/**
	 * Load the scripts in admin for managers and frontend if enabled.
	 */
	private function load_scripts() {
		if ( current_user_can( 'manage_options' ) ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_panel_scripts' ) );
			if ( $this->get_setting( 'frontend', false ) ) {
				add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_panel_scripts' ) );
			}
		}
	}

	/**
	 * Enqueue the panel scripts.
	 */
	public function enqueue_panel_scripts() {
		$plugin_url        = plugin_dir_url( __DIR__ );
		$plugin_path       = plugin_dir_path( __DIR__ );
		$script_path       = 'build/index.js';
		$script_asset_path = 'build/index.asset.php';
		$script_asset      = file_exists( $plugin_path . $script_asset_path ) // Update this line
			? require $plugin_path . $script_asset_path // Update this line
			: array(
				'dependencies' => array(),
				'version'      => filemtime( $plugin_path . $script_path ), // Update this line
			);
		$script_url        = plugins_url( $script_path, __DIR__ );
		wp_enqueue_script( 'search-buddy-panel', $script_url, $script_asset['dependencies'], $script_asset['version'], true );
		wp_enqueue_style( 'search-buddy-panel', $plugin_url . 'build/index.css' );

		wp_add_inline_script( 'search-buddy-panel', 'window.searchBuddy = ' . wp_json_encode( $this->get_script_data() ) . ';', 'before' );
	}

	/**
	 * Register CLI commands for batch updates and deletes.
	 */
	public function register_cli_commands() {
		WP_CLI::add_command( 'wc buddy batch', array( $this, 'batch_command' ) );
	}

	/**
	 * Batch update entities.
	 *
	 * @param array $args The command line arguments.
	 * @param array $assoc_args The associative command line arguments.
	 */
	public function batch_command( $args, $assoc_args ) {
		$method           = $args[0] ?? 'update';
		$entity           = $args[1] ?? 'all';
		$provider         = $assoc_args['provider'] ?? null;
		$changed_provider = false;
		$per_page         = isset( $assoc_args['per-page'] ) ? (int) $assoc_args['per-page'] : 20;

		$entities = 'all' === $entity ? array_keys( $this->entities ) : array( $entity );

		if ( $provider ) {
			try {
				$provider_instance = $this->switch_provider( $provider );
				$changed_provider  = true;
			} catch ( \Exception $e ) {
				WP_CLI::error( 'Error switching provider: ' . $e->getMessage() );
			}
		} else {
			$provider = $this->provider;
		}

		foreach ( $entities as $entity ) {
			if ( ! isset( $this->entities[ $entity ] ) ) {
				WP_CLI::warning( "Entity '$entity' not found or not enabled. Skipping." );
				continue;
			}

			$entity_instance = $this->entities[ $entity ];

			if ( $changed_provider ) {
				$entity_class    = $this->get_enabled_entities()[ $entity ];
				$entity_instance = new $entity_class( $provider );
			}

			// Check if provider implements Batchable
			if ( $provider instanceof Batchable ) {
				$page = 1;
				do {
					if ( 'update' === $method ) {
						$items = $entity_instance->get_items( $page, $per_page );
						if ( ! empty( $items ) ) {
							$provider->batch_update_items( $items, $entity );
							WP_CLI::success( sprintf( 'Processed page %d of %s items', $page, $entity ) );
						}
					} elseif ( 'delete' === $method ) {
						if ( \method_exists( $entity_instance, 'get_items_ids' ) ) {
							$items = $entity_instance->get_items_ids( $page, $per_page );
						} else {
							$items = $entity_instance->get_items( $page, $per_page );
							$items = array_map(
								function ( $item ) {
									return $item['id'];
								},
								$items
							);
						}
						if ( ! empty( $items ) ) {
							$provider->batch_delete_items( $items, $entity );
							WP_CLI::success( sprintf( 'Processed page %d of %s items', $page, $entity ) );
						}
					}
					++$page;
				} while ( ! empty( $items ) );
			} else {
				WP_CLI::error( 'Provider does not implement Batchable.' );
			}
		}
	}
	/**
	 * Switch to a different search provider.
	 *
	 * @param string $provider_name The name of the provider to switch to.
	 * @throws \Exception If the provider is not found or does not implement ProviderInterface.
	 * @return ProviderInterface
	 */
	private function switch_provider( $provider_name ) {
		/**
		 * Filters the list of available search providers.
		 *
		 * @param array $providers An array of provider names and their corresponding class names.
		 * @since 1.0.0
		 */
		$providers = apply_filters(
			'woo_buddy_available_providers',
			array(
				'default' => DefaultProvider::class,
				'algolia' => Algolia::class,
			)
		);

		if ( ! isset( $providers[ $provider_name ] ) ) {
			throw new \Exception( sprintf( 'Provider %s not found.', esc_html( $provider_name ) ) );
		}

		$provider_class = $providers[ $provider_name ];
		$new_provider   = new $provider_class();

		if ( ! $new_provider instanceof ProviderInterface ) {
			throw new \Exception( sprintf( 'Provider %s does not implement ProviderInterface.', esc_html( $provider_name ) ) );
		}

		if ( ! $new_provider->is_ready() ) {
			throw new \Exception( sprintf( 'Provider %s is not ready.', esc_html( $provider_name ) ) );
		}

		return $new_provider;
	}

	/**
	 * Prepare the data meant to initiate the app.
	 *
	 * @return array
	 */
	public function get_script_data() {
		$entities      = $this->get_enabled_entities();
		$entities_data = array();
		foreach ( $entities as $entity_slug => $entity_class ) {
			$entity                                      = $this->entities[ $entity_slug ];
			$entity_layout                               = $entity->layout();
			$entities_data[ $entity::get_entity_slug() ] = array(
				'template' => $entity_layout['template']::slug(),
				'bindings' => $entity_layout['bindings'],
				'label'    => $entity::get_entity_label(),
			);
		}

		$data = array(
			'entities' => $entities_data,
			'main'     => array(
				'provider' => $this->provider->get_provider_slug(),
				'enabled'  => $this->get_setting( 'enabled', false ),
			),
		);

		if ( in_array( HasSettings::class, Classes::class_uses_recursive( $this->provider ), true ) ) {
			// @todo: figure out a better typeguard for this.
			if ( ! method_exists( $this->provider, 'get_settings' ) || ! method_exists( $this->provider, 'get_fields' ) ) {
				return $data;
			}

			$provider_settings = $this->provider->get_settings();
			$provider_data     = array_reduce(
				$this->provider->get_fields(),
				function ( $carry, $field ) use ( $provider_settings ) {
					if ( $field['public'] ) {
						$carry[ $field['name'] ] = $provider_settings[ $field['name'] ] ?? $field['default'];
					}
					return $carry;
				},
				array()
			);

			$data[ $this->provider->get_provider_slug() ] = $provider_data;
		}

		return $data;
	}
}
