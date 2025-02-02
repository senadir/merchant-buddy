<?php
declare( strict_types=1 );
namespace Nadir\MerchantBuddy\Helpers;

/**
 * Helper methods when dealing with classes and inhertitance.
 */
class Classes {

	/**
	 * Returns all traits used by a class, its parent classes and trait of their traits.
	 *
	 * @param  object|string $_class Which class to check.
	 * @return array
	 */
	public static function class_uses_recursive( $_class ) {
		if ( is_object( $_class ) ) {
			$_class = get_class( $_class );
		}

		$results = array();

		foreach ( array_reverse( class_parents( $_class ) ? class_parents( $_class ) : array() ) + array( $_class => $_class ) as $_class ) {
			$results += self::trait_uses_recursive( $_class );
		}

		return array_unique( $results );
	}

	/**
	 * Returns all traits used by a trait and its traits.
	 *
	 * @param  object|string $_trait Which trait to check.
	 * @return array
	 */
	public static function trait_uses_recursive( $_trait ) {
		$traits = class_uses( $_trait ) ? class_uses( $_trait ) : array();

		foreach ( $traits as $_trait ) {
			$traits += self::trait_uses_recursive( $_trait );
		}

		return $traits;
	}
}
