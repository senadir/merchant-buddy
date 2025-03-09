<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Providers;

use Nadir\MerchantBuddy\Entities;
use Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface;

/**
 * DefaultProviderApi class, provides API endpoints for default provider.
 */
class DefaultProviderApi {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/merchant-buddy/default';

	/**
	 * Default provider class.
	 *
	 * @var ProviderInterface
	 */
	protected $provider;

	/**
	 * Constrcutor, loaded up by the provider.
	 *
	 * @param ProviderInterface $provider default provider used for searching.
	 */
	public function __construct( ProviderInterface $provider ) {
		add_action( 'rest_api_init', array( $this, 'register_api_endpoints' ) );
		$this->provider = $provider;
	}

	/**
	 * Get the enabled entities
	 *
	 * @return array
	 */
	public function get_enabled_entities() {
		/**
		 * Filters the list of available entities.
		 *
		 * @param array $entities An array of entity names and their corresponding class names.
		 * @since 1.0.0
		 */
		$entities = apply_filters(
			'merchant_buddy_available_entities',
			array(
				'orders'    => Entities\Orders::class,
				'products'  => Entities\Products::class,
				'customers' => Entities\Customers::class,
			)
		);

		$enabled_entities = get_option( 'merchant_buddy_enabled_entities', array( 'orders', 'products', 'customers' ) );

		return array_intersect_key( $entities, array_flip( $enabled_entities ) );
	}

	/**
	 * Register routes.
	 *
	 * @since 1.0.0
	 */
	public function register_api_endpoints() {
		register_rest_route(
			$this->namespace,
			'/search/(?P<entity>\w[\w\s\-]*)',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'search' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => array(
						'entity' => array(
							'description'       => __( 'Entity to search against', 'merchant-buddy' ),
							'type'              => 'string',
							'enum'              => array_merge( array( 'all' ), array_keys( $this->get_enabled_entities() ) ),
							'default'           => array(),
							'sanitize_callback' => function ( $value ) {
								return sanitize_text_field( $value );
							},
							'required'          => true,
						),
						's'      => array(
							'description'       => __( 'Search query', 'merchant-buddy' ),
							'type'              => 'string',
							'required'          => true,
							'sanitize_callback' => function ( $value ) {
								return sanitize_text_field( $value );
							},
						),
					),
				),
			)
		);
	}

	/**
	 * Search entities
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_HTTP_Response The response object.
	 */
	public function search( $request ) {
		$entity       = $request->get_param( 'entity' );
		$search_query = $request->get_param( 's' );

		if ( 'all' === $entity ) {
			$entities = $this->get_enabled_entities();
		} else {
			$entities = array(
				$entity => $this->get_enabled_entities()[ $entity ],
			);
		}

		$data = array();

		foreach ( $entities as $entity => $entity_class ) {
			$entity_object  = new $entity_class( $this->provider );
			$result         = $entity_object->search( $search_query );
			$display_fields = $entity_object->get_display_fields();
			if ( empty( $display_fields ) ) {
				$data[ $entity ] = $result;
			} else {
				$data[ $entity ] = array_map(
					function ( $item ) use ( $display_fields ) {
						return array_intersect_key( $item, array_merge( array( 'id' => 'id' ), array_flip( $display_fields ) ) );
					},
					$result
				);
			}
		}

		return new \WP_HTTP_Response( $data );
	}

	/**
	 * Check if the current user has permission to perform the request.
	 *
	 * @todo Fix later.
	 * @return bool|\WP_Error
	 */
	public function check_permission() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'merchant-buddy' ), array( 'status' => rest_authorization_required_code() ) );
		}
		return true;
	}
}
