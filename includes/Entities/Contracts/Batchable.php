<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities\Contracts;

interface Batchable {

	/**
	 * Get items to be used in batch operations.
	 *
	 * @param int $page The page number.
	 * @param int $per_page The number of items per page.
	 * @return array
	 */
	public function get_items( int $page = 1, int $per_page = 10 ): array;
}
