<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Providers\Contracts;

interface ProviderInterface {
	/**
	 * Returns the provider label.
	 *
	 * @return string
	 */
	public static function get_provider_label(): string;

	/**
	 * Returns the provider slug.
	 *
	 * @return string
	 */
	public static function get_provider_slug(): string;

	/**
	 * Checks if the provider is ready to be used.
	 *
	 * @return bool
	 */
	public function is_ready(): bool;

	/**
	 * Adds an item to the index.
	 *
	 * @param array  $item_data The data of the item to add.
	 * @param int    $item_id The ID of the item to add.
	 * @param string $entity_name The name of the index to add the item to.
	 * @return bool
	 */
	public function create_item( array $item_data, int $item_id, string $entity_name ): bool;

	/**
	 * Updates an item in the index.
	 *
	 * @param array  $item_data The data of the item to update.
	 * @param int    $item_id The ID of the item to update.
	 * @param string $entity_name The name of the index to update the item in.
	 * @return bool
	 */
	public function update_item( array $item_data, int $item_id, string $entity_name ): bool;

	/**
	 * Deletes an item from the index.
	 *
	 * @param int    $item_id The ID of the item to delete.
	 * @param string $entity_name The name of the index to delete the item from.
	 * @return bool
	 */
	public function delete_item( int $item_id, string $entity_name ): bool;
}
