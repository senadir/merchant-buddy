<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities;

interface EntityInterface {

	/**
	 * Get the layout of the entity.
	 *
	 * @return array{template: string, bindings: array}
	 */
	public function layout(): array;

	/**
	 * Get the slug of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_slug(): string;

	/**
	 * Get the name of the entity.
	 *
	 * @return string
	 */
	public static function get_entity_label(): string;

	/**
	 * Initialize the hooks for the entity.
	 *
	 * @return void
	 */
	public function init_hooks(): void;

	/**
	 * Search function to be used with the default provider.
	 *
	 * @param string $query Search query.
	 * @return array Items searched and transformed.
	 */
	public function search( string $query ): array;

	/**
	 * Get the data for an item, should take an object or WP shaped item and return an array of data.
	 *
	 * @param object|array $item The item to get the data for.
	 * @return array
	 */
	public function get_item_data( $item ): array;
}
