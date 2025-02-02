<?php
declare(strict_types=1);
namespace Nadir\MerchantBuddy\Providers\Contracts;

interface Batchable {

	/**
	 * Adds multiple items to the index.
	 *
	 * @param array  $items The data of the items to add.
	 * @param string $index_name The name of the index to add the items to.
	 * @return bool
	 */
	public function batch_add_items( array $items, string $index_name ): bool;

	/**
	 * Updates multiple items in the index.
	 *
	 * @param array  $items The data of the items to update.
	 * @param string $index_name The name of the index to update the items in.
	 * @return bool
	 */
	public function batch_update_items( array $items, string $index_name ): bool;

	/**
	 * Deletes multiple items from the index.
	 *
	 * @param array  $item_ids The IDs of the items to delete.
	 * @param string $index_name The name of the index to delete the items from.
	 * @return bool
	 */
	public function batch_delete_items( array $item_ids, string $index_name ): bool;
}
