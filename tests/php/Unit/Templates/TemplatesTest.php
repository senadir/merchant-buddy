<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Templates;

use Nadir\MerchantBuddy\Entities\Templates\DoubleRow;
use Nadir\MerchantBuddy\Entities\Templates\DoubleRowNoMedia;
use Nadir\MerchantBuddy\Entities\Templates\SingleRow;
use Nadir\MerchantBuddy\Entities\Templates\Template;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class TemplatesTest extends TestCase {

	// ── DoubleRow ────────────────────────────────────────────────────

	public function test_double_row_implements_template_interface(): void {
		$this->assertContains( Template::class, class_implements( DoubleRow::class ) );
	}

	public function test_double_row_slug(): void {
		$this->assertSame( 'double-row', DoubleRow::slug() );
	}

	public function test_double_row_structure_has_two_columns(): void {
		$structure = DoubleRow::structure();

		$this->assertArrayHasKey( 'columns', $structure );
		$this->assertCount( 2, $structure['columns'] );
	}

	public function test_double_row_structure_first_column_is_image(): void {
		$columns = DoubleRow::structure()['columns'];

		$this->assertSame( 'image', $columns[0]['rows'][0]['content']['type'] );
		$this->assertSame( 'primary_image', $columns[0]['rows'][0]['content']['name'] );
	}

	public function test_double_row_structure_second_column_has_two_rows(): void {
		$columns = DoubleRow::structure()['columns'];

		$this->assertCount( 2, $columns[1]['rows'] );
		$this->assertSame( 'primary_text', $columns[1]['rows'][0]['content']['name'] );
		$this->assertSame( 'secondary_text', $columns[1]['rows'][1]['content']['name'] );
	}

	// ── SingleRow ────────────────────────────────────────────────────

	public function test_single_row_implements_template_interface(): void {
		$this->assertContains( Template::class, class_implements( SingleRow::class ) );
	}

	public function test_single_row_slug(): void {
		$this->assertSame( 'single-row', SingleRow::slug() );
	}

	public function test_single_row_structure_has_three_columns(): void {
		$structure = SingleRow::structure();

		$this->assertCount( 3, $structure['columns'] );
	}

	public function test_single_row_structure_first_column_is_image(): void {
		$columns = SingleRow::structure()['columns'];

		$this->assertSame( 'image', $columns[0]['rows'][0]['content']['type'] );
	}

	public function test_single_row_uses_pipe_separator(): void {
		$columns = SingleRow::structure()['columns'];

		$this->assertSame( '|', $columns[2]['rows'][0]['content']['separator'] );
	}

	// ── DoubleRowNoMedia ─────────────────────────────────────────────

	public function test_double_row_no_media_implements_template_interface(): void {
		$this->assertContains( Template::class, class_implements( DoubleRowNoMedia::class ) );
	}

	public function test_double_row_no_media_slug(): void {
		$this->assertSame( 'double-row-no-media', DoubleRowNoMedia::slug() );
	}

	public function test_double_row_no_media_structure_has_single_column(): void {
		$structure = DoubleRowNoMedia::structure();

		$this->assertCount( 1, $structure['columns'] );
	}

	public function test_double_row_no_media_column_size_is_12(): void {
		$columns = DoubleRowNoMedia::structure()['columns'];

		$this->assertSame( 12, $columns[0]['size'] );
	}

	public function test_double_row_no_media_has_two_text_rows(): void {
		$columns = DoubleRowNoMedia::structure()['columns'];

		$this->assertCount( 2, $columns[0]['rows'] );
		$this->assertSame( 'text', $columns[0]['rows'][0]['content']['type'] );
		$this->assertSame( 'text', $columns[0]['rows'][1]['content']['type'] );
	}
}
