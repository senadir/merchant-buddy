<?php
/**
 * Minimal WP / WC class stubs for unit testing with Brain\Monkey.
 *
 * These stubs only declare the class/method signatures referenced by the
 * plugin source code so the real files can be loaded without a full
 * WordPress environment.
 */

// ──────────────────────────────────────────────────────────────────────
// WordPress core stubs
// ──────────────────────────────────────────────────────────────────────

if ( ! class_exists( 'WP_REST_Server' ) ) {
	class WP_REST_Server {
		const READABLE = 'GET';
	}
}

if ( ! class_exists( 'WP_REST_Request' ) ) {
	class WP_REST_Request {
		protected $params = array();

		public function __construct( $method = '', $route = '' ) {}

		public function set_param( $key, $value ) {
			$this->params[ $key ] = $value;
		}

		public function get_param( $key ) {
			return $this->params[ $key ] ?? null;
		}

		public function get_params() {
			return $this->params;
		}
	}
}

if ( ! class_exists( 'WP_HTTP_Response' ) ) {
	class WP_HTTP_Response {
		public $data;
		public $status;

		public function __construct( $data = null, $status = 200, $headers = array() ) {
			$this->data   = $data;
			$this->status = $status;
		}

		public function get_data() {
			return $this->data;
		}

		public function get_status() {
			return $this->status;
		}
	}
}

if ( ! class_exists( 'WP_Error' ) ) {
	class WP_Error {
		public $code;
		public $message;
		public $data;

		public function __construct( $code = '', $message = '', $data = '' ) {
			$this->code    = $code;
			$this->message = $message;
			$this->data    = $data;
		}

		public function get_error_code() {
			return $this->code;
		}

		public function get_error_message() {
			return $this->message;
		}

		public function get_error_data() {
			return $this->data;
		}
	}
}

if ( ! class_exists( 'WP_User' ) ) {
	class WP_User {
		public $ID = 0;

		public function __construct( $id = 0 ) {
			$this->ID = $id;
		}
	}
}

if ( ! class_exists( 'WP_User_Query' ) ) {
	class WP_User_Query {
		protected $results = array();

		public function __construct( $args = array() ) {}

		public function get_results() {
			return $this->results;
		}
	}
}

if ( ! class_exists( 'WP_Post' ) ) {
	class WP_Post {
		public $ID          = 0;
		public $post_type   = '';
		public $post_status = 'publish';
	}
}

// ──────────────────────────────────────────────────────────────────────
// WP_CLI stub
// ──────────────────────────────────────────────────────────────────────

if ( ! class_exists( 'WP_CLI' ) ) {
	class WP_CLI {
		public static $logged = array();

		public static function add_command( $name, $callable, $args = array() ) {
			// no-op in tests
		}

		public static function success( $message ) {
			self::$logged[] = array( 'success', $message );
		}

		public static function warning( $message ) {
			self::$logged[] = array( 'warning', $message );
		}

		public static function error( $message, $exit = true ) {
			self::$logged[] = array( 'error', $message );
			// In tests we throw instead of calling exit()
			throw new \RuntimeException( $message );
		}

		public static function reset() {
			self::$logged = array();
		}
	}
}

// ──────────────────────────────────────────────────────────────────────
// WooCommerce core stubs
// ──────────────────────────────────────────────────────────────────────

if ( ! class_exists( 'WC_Integration' ) ) {
	class WC_Integration {
		public $id           = '';
		public $method_title = '';

		public function __construct() {}
	}
}

if ( ! class_exists( 'WC_DateTime' ) ) {
	class WC_DateTime extends \DateTime {
		public function getTimestamp(): int {
			return parent::getTimestamp();
		}
	}
}

if ( ! class_exists( 'WC_Order_Item' ) ) {
	class WC_Order_Item {
		protected $name = '';

		public function get_name() {
			return $this->name;
		}

		public function set_name( $name ) {
			$this->name = $name;
		}
	}
}

if ( ! class_exists( 'WC_Order' ) ) {
	class WC_Order {
		protected $id = 0;
		protected $data = array();

		public function __construct( $id = 0 ) {
			$this->id = $id;
		}

		public function get_id() { return $this->id; }
		public function get_order_number() { return (string) $this->id; }
		public function get_status() { return 'processing'; }
		public function get_total() { return '100.00'; }
		public function get_customer_id() { return 1; }
		public function get_date_created() { return null; }
		public function get_date_modified() { return null; }
		public function get_formatted_billing_full_name() { return 'John Doe'; }
		public function get_edit_order_url() { return 'https://example.com/wp-admin/post.php?post=' . $this->id . '&action=edit'; }
		public function get_items() { return array(); }

		// Billing address methods
		public function get_billing_first_name() { return 'John'; }
		public function get_billing_last_name() { return 'Doe'; }
		public function get_billing_company() { return ''; }
		public function get_billing_email() { return 'john@example.com'; }
		public function get_billing_phone() { return '555-1234'; }
		public function get_billing_address_1() { return '123 Main St'; }
		public function get_billing_address_2() { return ''; }
		public function get_billing_city() { return 'Anytown'; }
		public function get_billing_state() { return 'CA'; }
		public function get_billing_postcode() { return '90210'; }
		public function get_billing_country() { return 'US'; }

		// Shipping address methods
		public function get_shipping_first_name() { return 'John'; }
		public function get_shipping_last_name() { return 'Doe'; }
		public function get_shipping_company() { return ''; }
		public function get_shipping_address_1() { return '123 Main St'; }
		public function get_shipping_address_2() { return ''; }
		public function get_shipping_city() { return 'Anytown'; }
		public function get_shipping_state() { return 'CA'; }
		public function get_shipping_postcode() { return '90210'; }
		public function get_shipping_country() { return 'US'; }
		public function get_shipping_phone() { return '555-5678'; }
	}
}

if ( ! class_exists( 'WC_Order_Query' ) ) {
	class WC_Order_Query {
		protected $args   = array();
		protected $orders = array();

		public function __construct( $args = array() ) {
			$this->args = $args;
		}

		public function get_orders() {
			return $this->orders;
		}

		public function set_orders( $orders ) {
			$this->orders = $orders;
		}
	}
}

if ( ! class_exists( 'WC_Product' ) ) {
	class WC_Product {
		protected $id = 0;

		public function __construct( $id = 0 ) {
			$this->id = $id;
		}

		public function get_id() { return $this->id; }
		public function get_name() { return 'Test Product'; }
		public function get_permalink() { return 'https://example.com/product/test'; }
		public function get_price() { return '29.99'; }
		public function get_stock_quantity() { return null; }
		public function get_status() { return 'publish'; }
		public function get_image_id() { return 0; }
		public function get_category_ids() { return array(); }
		public function get_children() { return array(); }
		public function get_date_created() { return null; }
		public function get_date_modified() { return null; }
	}
}

if ( ! class_exists( 'WC_Customer' ) ) {
	class WC_Customer {
		protected $id = 0;

		public function __construct( $id = 0 ) {
			$this->id = $id;
		}

		public function get_id() { return $this->id; }
		public function get_first_name() { return 'Jane'; }
		public function get_last_name() { return 'Doe'; }
		public function get_email() { return 'jane@example.com'; }
		public function get_billing_phone() { return '555-0001'; }
		public function get_shipping_phone() { return '555-0002'; }

		public function get_billing_address_1() { return '456 Oak Ave'; }
		public function get_billing_address_2() { return ''; }
		public function get_billing_city() { return 'Springfield'; }
		public function get_billing_state() { return 'IL'; }
		public function get_billing_postcode() { return '62701'; }
		public function get_billing_country() { return 'US'; }
		public function get_billing_company() { return ''; }

		public function get_shipping_address_1() { return '456 Oak Ave'; }
		public function get_shipping_address_2() { return ''; }
		public function get_shipping_city() { return 'Springfield'; }
		public function get_shipping_state() { return 'IL'; }
		public function get_shipping_postcode() { return '62701'; }
		public function get_shipping_country() { return 'US'; }
		public function get_shipping_company() { return ''; }
	}
}

if ( ! class_exists( 'WC_Data_Store' ) ) {
	class WC_Data_Store {
		protected $type = '';

		public function __construct( $type = '' ) {
			$this->type = $type;
		}

		public static function load( $type ) {
			return new self( $type );
		}

		public function search_products( $term = '', $type = '', $include_variations = false, $all_statuses = false, $limit = 0 ) {
			return array();
		}

		public function search_customers( $term = '', $limit = 0 ) {
			return array();
		}
	}
}

// ──────────────────────────────────────────────────────────────────────
// WooCommerce Utilities
// ──────────────────────────────────────────────────────────────────────

if ( ! class_exists( 'Automattic\WooCommerce\Utilities\I18nUtil' ) ) {
	// Required by SearchSettings import.
	class_alias( 'stdClass', 'Automattic\WooCommerce\Utilities\I18nUtil' );
}

// Algolia SDK is available via composer - no stub needed.
