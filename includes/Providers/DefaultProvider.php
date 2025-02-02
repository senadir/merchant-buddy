<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Providers;

use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
/**
 * Class DefaultProvider
 *
 * @since   0.0.1
 * @package Nadir\MerchantBuddy\Providers
 */
class DefaultProvider implements ProviderInterface {

	/**
	 * The constructor.
	 */
	public function __construct() {
		new DefaultProviderApi( $this );
	}
	/**
	 * Returns the provider name.
	 *
	 * @return string
	 */
	public static function get_provider_slug(): string {
		return 'default';
	}

	/**
	 * Returns the provider name.
	 *
	 * @return string
	 */
	public static function get_provider_label(): string {
		return 'Default';
	}

	/**
	 * Checks if the provider is ready to be used.
	 *
	 * @return bool
	 */
	public function is_ready(): bool {
		return true;
	}

	/**
	 * Adds an item to the index.
	 *
	 * @param array  $item_data The data of the item to add.
	 * @param int    $item_id The ID of the item to add.
	 * @param string $entity_name The name of the index to add the item to.
	 */
	public function create_item( array $item_data, int $item_id, string $entity_name ): bool {
		return true;
	}

	/**
	 * Updates an item in the index.
	 *
	 * @param array  $item_data The data of the item to update.
	 * @param int    $item_id The ID of the item to update.
	 * @param string $entity_name The name of the index to update the item in.
	 */
	public function update_item( array $item_data, int $item_id, string $entity_name ): bool {
		return true;
	}

	/**
	 * Deletes an item from the index.
	 *
	 * @param int    $item_id The ID of the item to delete.
	 * @param string $entity_name The name of the index to delete the item from.
	 */
	public function delete_item( int $item_id, string $entity_name ): bool {
		return true;
	}
}
