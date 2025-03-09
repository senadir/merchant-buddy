<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities;

use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;

/**
 * Abstract class for an entity.
 */
abstract class AbstractEntity implements EntityInterface {

	/**
	 * The searchable fields for the entity.
	 *
	 * @var array
	 */
	public static $searchable_fields = array();

	/**
	 * The display fields for the entity.
	 *
	 * @var array
	 */
	public static $display_fields = array();

	/**
	 * The provider of the entity.
	 *
	 * @var ProviderInterface
	 */
	protected ProviderInterface $provider;

	/**
	 * Constructor.
	 *
	 * @param ProviderInterface $provider The provider of the entity.
	 */
	public function __construct( ProviderInterface $provider ) {
		$this->provider = $provider;
	}

	/**
	 * Get the searchable fields for the entity.
	 *
	 * @return array
	 */
	final public function get_searchable_fields(): array {
		/**
		 * Filter the searchable fields for the entity.
		 *
		 * @param string[] $searchable_fields The searchable fields.
		 * @param EntityInterface $entity The entity.
		 * @return string[] Searchable fields.
		 *
		 * @since 1.0.0
		 */
		return apply_filters( "merchant_buddy_{$this->get_entity_slug()}_searchable_fields", static::$searchable_fields, $this );
	}

	/**
	 * Get the display fields for the entity.
	 *
	 * @return array
	 */
	final public function get_display_fields(): array {
		/**
		 * Filter the display fields for the entity.
		 *
		 * @param string[] $display_fields The display fields.
		 * @param EntityInterface $entity The entity.
		 * @return string[] Display fields.
		 *
		 * @since 1.0.0
		 */
		return apply_filters( "merchant_buddy_{$this->get_entity_slug()}_display_fields", static::$display_fields, $this );
	}
}
