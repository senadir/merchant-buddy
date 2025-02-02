<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Entities\Templates;

interface Template {
	/**
	 * Get the name of the template.
	 *
	 * @return string
	 */
	public static function slug(): string;

	/**
	 * Describes the structure of the template in JSON format.
	 *
	 * @return array{columns: array{array{size: int, rows: array{array{content: array{type: string, name: string, required?: bool, separator?: string}}}}}}
	 */
	public static function structure(): array;
}
