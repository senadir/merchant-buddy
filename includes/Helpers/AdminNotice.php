<?php
declare( strict_types=1 );

namespace Nadir\MerchantBuddy\Helpers;

/**
 * AdminNotice class.
 *
 * @since 1.0.0
 */
class AdminNotice {

	/**
	 * Notices to render.
	 *
	 * @var array<array{message: string, type: string, dismissible: bool}>
	 */
	protected $notices = array();

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'admin_notices', array( $this, 'display_notices' ) );
	}

	/**
	 * Adds a notice to the notices array.
	 *
	 * @param string $message The notice message.
	 * @param string $type The notice type.
	 * @return void
	 */
	public function add_notice( string $message, string $type = 'info' ): void {
		$this->notices[] = array(
			'message'     => $message,
			'type'        => $type,
			'dismissible' => false,
		);
	}

	/**
	 * Renders notices.
	 *
	 * @return void
	 */
	public function display_notices(): void {
		foreach ( $this->notices as $notice ) { ?>
			<div class="<?php echo esc_attr( $notice['type'] ); ?> notice <?php echo $notice['dismissible'] ? 'is-dismissible' : ''; ?>">
				<p><?php echo esc_html( $notice['message'] ); ?></p>
			</div>
			<?php
		}
	}
}
