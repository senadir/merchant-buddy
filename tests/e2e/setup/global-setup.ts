/**
 * External dependencies
 */
import { chromium, type FullConfig } from '@playwright/test';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const ADMIN_USER = process.env.WP_ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.WP_ADMIN_PASS || 'password';
const BASE_URL = process.env.WP_BASE_URL || 'http://localhost:8889';
const AUTH_DIR = path.join( __dirname, '.auth' );
const STORAGE_STATE_PATH = path.join( AUTH_DIR, 'admin.json' );

/**
 * Run a WP-CLI command on the tests-cli container.
 * Returns stdout on success, null on failure.
 */
function wpCli( command: string ): string | null {
	try {
		return execSync( `bunx wp-env run tests-cli -- wp ${ command }`, {
			encoding: 'utf-8',
			stdio: [ 'pipe', 'pipe', 'pipe' ],
		} ).trim();
	} catch {
		return null;
	}
}

/**
 * Create test data via WP-CLI in the tests container.
 * Each step is independent so failures don't block later steps.
 */
function createTestData() {
	// Check if test data already exists
	const existingProducts = wpCli(
		'wc product list --search="E2E Test" --format=count --user=admin'
	);
	if ( existingProducts && parseInt( existingProducts, 10 ) >= 2 ) {
		// eslint-disable-next-line no-console
		console.log( 'Test data already exists, skipping creation.' );
		return;
	}

	// Create two products
	const product1Id = wpCli(
		'wc product create --name="E2E Test Widget" --type=simple --regular_price=19.99 --sku=e2e-widget-001 --user=admin --porcelain'
	);

	const product2Id = wpCli(
		'wc product create --name="E2E Test Gadget" --type=simple --regular_price=49.99 --sku=e2e-gadget-001 --user=admin --porcelain'
	);

	// Create a customer
	const customerId = wpCli(
		'wc customer create --email=e2e-customer@example.com --first_name=E2E --last_name=Customer --username=e2e_customer --user=admin --porcelain'
	);

	// Create an order with line items (only if we have product IDs)
	if ( product1Id && product2Id && customerId ) {
		wpCli(
			`wc shop_order create --status=processing --customer_id=${ customerId } --billing='{"first_name":"E2E","last_name":"Customer","email":"e2e-customer@example.com"}' --line_items='[{"product_id":${ product1Id },"quantity":2},{"product_id":${ product2Id },"quantity":1}]' --user=admin --porcelain`
		);
	}
}

/**
 * Reset plugin settings to known defaults so tests aren't affected by
 * database state left over from manual usage or previous test runs.
 */
function resetPluginSettings() {
	wpCli(
		`option update merchant_buddy_main_settings '{"enabled":"yes","provider":"default","shortcut":"meta+h"}' --format=json`
	);
	wpCli(
		`option update merchant_buddy_enabled_entities '["orders","products","customers"]' --format=json`
	);
}

/**
 * Authenticate as admin and save storage state for reuse in tests.
 */
async function globalSetup( _config: FullConfig ) {
	// Ensure auth directory exists
	if ( ! fs.existsSync( AUTH_DIR ) ) {
		fs.mkdirSync( AUTH_DIR, { recursive: true } );
	}

	const browser = await chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();

	// Log in to WordPress admin
	await page.goto( `${ BASE_URL }/wp-login.php` );
	await page.fill( '#user_login', ADMIN_USER );
	await page.fill( '#user_pass', ADMIN_PASS );
	await page.click( '#wp-submit' );
	await page.waitForURL( '**/wp-admin/**' );

	// Save authentication state
	await context.storageState( { path: STORAGE_STATE_PATH } );
	await browser.close();

	// Reset plugin settings to known defaults
	resetPluginSettings();

	// Create test data via WP-CLI
	createTestData();
}

export default globalSetup;
