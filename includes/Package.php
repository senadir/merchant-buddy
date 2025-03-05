<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy;

use Automattic\WooCommerce\Blocks\Registry\Container;
use Nadir\MerchantBuddy\Helpers\AdminNotice;

/**
 * Main package class.
 *
 * Returns information about the package and handles init.
 *
 * @since 1.0.0
 */
class Package {
    /**
     * Version of the plugin
     *
     * @var string
     */
    private $version;

    /**
     * Path to the plugin directory
     *
     * @var string
     */
    private $path;

    /**
     * Constructor.
     *
     * @param string $version Plugin version.
     * @param string $path    Path to the plugin directory.
     */
    public function __construct(string $version, string $path) {
        $this->version = $version;
        $this->path = $path;
    }

    /**
     * Initialize the plugin.
     */
    public static function init(): void {
        self::container()->get(SearchManager::class);

        add_filter(
            'woocommerce_integrations',
            function ($integrations) {
                $integrations[] = SearchSettings::class;
                return $integrations;
            }
        );
    }

    /**
     * Get the version of the package.
     */
    public function get_version(): string {
        return $this->version;
    }

    /**
     * Get the path to the package.
     */
    public function get_path(): string {
        return $this->path;
    }

    /**
     * Loads the dependency injection container.
     *
     * @param boolean $reset Used to reset the container to a fresh instance.
     */
    public static function container(bool $reset = false): Container {
        static $container = null;

        if (!$container instanceof Container || $reset) {
            $container = new Container();
            
            // Register Package
            $container->register(
                self::class,
                function () {
                    return new self(
                        MERCHANT_BUDDY_VERSION,
                        MERCHANT_BUDDY_PLUGIN_PATH
                    );
                }
            );

            // Register AdminNotice as singleton
            $container->register(
                AdminNotice::class,
                function () {
                    return new AdminNotice();
                }
            );

            // Register SearchManager as singleton
            $container->register(
                SearchManager::class,
                function (Container $container) {
                    return new SearchManager(
                        $container->get(AdminNotice::class)
                    );
                }
            );

            // Register SearchSettings as singleton
            $container->register(
                SearchSettings::class,
                function () {
                    return new SearchSettings();
                }
            );
        }

        return $container;
    }
} 