<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities\Templates;

/**
 * Class for the Media template, a 2 column layout with a primary image and 1 rows of text.
 */
class SingleRow implements Template {
	/**
	 * Get the name of the template.
	 *
	 * @return string
	 */
	public static function slug(): string {
		return 'single-row';
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
					'size' => 1,
					'rows' => array(
						array(
							'content' => array(
								'type' => 'image',
								'name' => 'primary_image',
							),
						),
					),
				),
				array(
					'size' => 'auto',
					'rows' => array(
						array(
							'content' => array(
								'type' => 'text',
								'name' => 'primary_text',
							),
						),
					),
				),
				array(
					'size' => 'auto',
					'rows' => array(
						array(
							'content' => array(
								'type'      => 'text',
								'name'      => 'secondary_text',
								'separator' => '|',
							),
						),
					),
				),
			),
		);
	}
}
