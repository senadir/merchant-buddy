<?php
declare(strict_types=1);

namespace Nadir\MerchantBuddy\Tests\php\Unit\Helpers;

use Brain\Monkey;
use Nadir\MerchantBuddy\Helpers\AdminNotice;
use Nadir\MerchantBuddy\Tests\php\Unit\TestCase;

class AdminNoticeTest extends TestCase {

	public function test_constructor_hooks_display_notices(): void {
		Monkey\Actions\expectAdded( 'admin_notices' )
			->once();

		new AdminNotice();
	}

	public function test_add_notice_stores_notice(): void {
		$notice = new AdminNotice();
		$notice->add_notice( 'Test message', 'error' );

		// Capture output from display_notices.
		ob_start();
		$notice->display_notices();
		$output = ob_get_clean();

		$this->assertStringContainsString( 'Test message', $output );
		$this->assertStringContainsString( 'notice-error', $output );
	}

	public function test_add_notice_defaults_to_info_type(): void {
		$notice = new AdminNotice();
		$notice->add_notice( 'Info message' );

		ob_start();
		$notice->display_notices();
		$output = ob_get_clean();

		$this->assertStringContainsString( 'notice-info', $output );
	}

	public function test_display_notices_renders_multiple_notices(): void {
		$notice = new AdminNotice();
		$notice->add_notice( 'First notice', 'warning' );
		$notice->add_notice( 'Second notice', 'error' );

		ob_start();
		$notice->display_notices();
		$output = ob_get_clean();

		$this->assertStringContainsString( 'First notice', $output );
		$this->assertStringContainsString( 'Second notice', $output );
	}

	public function test_display_notices_renders_nothing_when_empty(): void {
		$notice = new AdminNotice();

		ob_start();
		$notice->display_notices();
		$output = ob_get_clean();

		$this->assertEmpty( trim( $output ) );
	}

	public function test_notice_is_not_dismissible_by_default(): void {
		$notice = new AdminNotice();
		$notice->add_notice( 'Non-dismissible' );

		ob_start();
		$notice->display_notices();
		$output = ob_get_clean();

		$this->assertStringNotContainsString( 'is-dismissible', $output );
	}
}
