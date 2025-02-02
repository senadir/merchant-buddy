<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities\Templates;

/**
 * Class for the Double Row No Media template, a single column layout with 2 rows of text.
 */
class DoubleRowNoMedia implements Template {
	/**
	 * Get the name of the template.
	 *
	 * @return string
	 */
	public static function slug(): string {
		return 'double-row-no-media';
	}

	/**
	 * Describes the structure of the template in JSON format.
	 *
	 * @return array{columns: array{array{size: int, rows: array{array{content: array{type: string, name: string, required?: bool, separator?: string}}}}}}
	 */
	public static function structure(): array {
		return array(
			'columns' => array(
				array(
					'size' => 12,
					'rows' => array(
						array(
							'content' => array(
								'type' => 'text',
								'name' => 'primary_text',
							),
						),
						array(
							'content' => array(
								'type'      => 'text',
								'name'      => 'secondary_text',
								'required'  => false,
								'separator' => '·',
							),
						),
					),
				),
			),
		);
	}
}
