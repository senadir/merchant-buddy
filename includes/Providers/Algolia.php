<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Providers;

use Algolia\AlgoliaSearch\SearchClient;
use Algolia\AlgoliaSearch\SearchIndex;
use Nadir\MerchantBuddy\Providers\Contracts\Batchable;
use Nadir\MerchantBuddy\Providers\Contracts\HasSettings;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;
/**
 * Class Algolia
 *
 * @since   0.0.1
 * @package Nadir\MerchantBuddy\Providers
 */
class Algolia implements ProviderInterface, Batchable {
	use HasSettings;

	/**
	 * The Algolia search client instance.
	 *
	 * @var \Algolia\AlgoliaSearch\SearchClient
	 */
	private SearchClient $client;

	/**
	 * Returns the index for the given index name.
	 *
	 * @param string $entity_name The name of the index to get.
	 * @return SearchIndex
	 */
	protected function get_index( string $entity_name ): SearchIndex {
		if ( ! isset( $this->client ) ) {
			$this->client = SearchClient::create( $this->settings['application_id'], $this->settings['admin_api_key'] );
		}

		return $this->client->initIndex( $entity_name );
	}

	/**
	 * Returns the provider name.
	 *
	 * @return string
	 */
	public static function get_provider_slug(): string {
		return 'algolia';
	}

	/**
	 * Returns the provider name.
	 *
	 * @return string
	 */
	public static function get_provider_label(): string {
		return 'Algolia';
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
		$index = $this->get_index( $entity_name );
		try {
			$index->saveObject( $item_data, array( 'objectIDKey' => 'id' ) );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( 'Error creating item in Algolia: ' . $e->getMessage() );
			return false;
		}
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
		$index = $this->get_index( $entity_name );
		try {
			$index->saveObject( $item_data, array( 'objectIDKey' => 'id' ) );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( 'Error updating item in Algolia: ' . $e->getMessage() );
			return false;
		}
		return true;
	}

	/**
	 * Deletes an item from the index.
	 *
	 * @param int    $item_id The ID of the item to delete.
	 * @param string $entity_name The name of the entity to delete the item from.
	 * @return bool
	 */
	public function delete_item( int $item_id, string $entity_name ): bool {
		$index = $this->get_index( $entity_name );
		try {
			$index->deleteObject( $item_id );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( 'Error deleting item in Algolia: ' . $e->getMessage() );
			return false;
		}
		return true;
	}

	/**
	 * Adds multiple items to the index.
	 *
	 * @param array  $items The data of the items to add.
	 * @param string $entity_name The name of the index to add the items to.
	 * @return bool
	 */
	public function batch_add_items( array $items, string $entity_name ): bool {
		$index = $this->get_index( $entity_name );
		$items = array_map(
			function ( $item ) {
				$item['objectID'] = $item['id'];
				return $item;
			},
			$items
		);
		try {
			$index->saveObjects( $items );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( 'Error adding items in Algolia: ' . $e->getMessage() );
			return false;
		}
		return true;
	}

	/**
	 * Updates multiple items in the index.
	 *
	 * @param array  $items The data of the items to update.
	 * @param string $entity_name The name of the index to update the items in.
	 * @return bool
	 */
	public function batch_update_items( array $items, string $entity_name ): bool {
		$index = $this->get_index( $entity_name );
		$items = array_map(
			function ( $item ) {
				$item['objectID'] = $item['id'];
				return $item;
			},
			$items
		);
		try {
			$index->saveObjects( $items );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( 'Error updating items in Algolia: ' . $e->getMessage() );
			return false;
		}
		return true;
	}

	/**
	 * Deletes multiple items from the index.
	 *
	 * @param array  $item_ids The IDs of the items to delete.
	 * @param string $entity_name The name of the index to delete the items from.
	 * @return bool
	 */
	public function batch_delete_items( array $item_ids, string $entity_name ): bool {
		$index = $this->get_index( $entity_name );
		try {
			$index->deleteObjects( $item_ids );
		} catch ( \Exception $e ) {
			wc_get_logger()->error( 'Error deleting items in Algolia: ' . $e->getMessage() );
			return false;
		}
		return true;
	}

	/**
	 * Returns the fields for the provider settings.
	 *
	 * @return array
	 */
	public static function get_fields() {
		return array(
			array(
				'title'       => __( 'Application ID', 'merchant-buddy' ),
				'type'        => 'text',
				'name'        => 'application_id',
				'description' => __( 'The application ID for the Algolia search.', 'merchant-buddy' ),
				'public'      => true,
			),
			array(
				'title'       => __( 'Search-only API Key', 'merchant-buddy' ),
				'type'        => 'password',
				'name'        => 'search_api_key',
				'description' => __( 'The search API key for the Algolia search. This will be used to search the indices in frontend.', 'merchant-buddy' ),
				'public'      => true,
			),
			array(
				'title'       => __( 'Admin API Key', 'merchant-buddy' ),
				'type'        => 'password',
				'name'        => 'admin_api_key',
				'description' => __( 'The admin API key for the Algolia search. This will be used to create and manage the indices.', 'merchant-buddy' ),
				'public'      => false,
			),
		);
	}

	/**
	 * Returns the description of the provider.
	 *
	 * @return array
	 */
	public static function get_description() {
		return array(
			'description' => __( 'The Algolia search provider keys. You can find those keys in your Algolia dashboard and settings screen.', 'merchant-buddy' ),
			'link'        => array(
				'text' => __( 'Get your keys', 'merchant-buddy' ),
				'url'  => 'https://dashboard.algolia.com/account/api-keys/all',
			),
		);
	}
}
