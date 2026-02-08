/**
 * External dependencies
 */
import { test, expect } from '@playwright/test';

const ADMIN_URL = '/wp-admin/';

/**
 * Helper: open the command palette and navigate to a specific entity.
 */
async function openEntitySearch(
	page: import( '@playwright/test' ).Page,
	entityName: string
) {
	await page.keyboard.press( 'Meta+h' );
	await expect( page.locator( '[cmdk-root]' ) ).toBeVisible();
	await page.locator( '[cmdk-item]', { hasText: entityName } ).click();
	await expect( page.locator( '[cmdk-vercel-badge]' ) ).toBeVisible();
}

test.describe( 'Search Flow', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( ADMIN_URL );
		await page.waitForSelector( '.merchant-buddy-container', {
			state: 'attached',
		} );
	} );

	test( 'Orders search returns results with correct layout', async ( {
		page,
	} ) => {
		await openEntitySearch( page, 'Orders' );

		await page.locator( '[cmdk-input]' ).fill( 'e2e' );

		// Wait for results
		const firstResult = page.locator( '.entity-renderer' ).first();
		await expect( firstResult ).toBeVisible( { timeout: 10000 } );

		// Orders use double-row layout: should have layout-flex-col and primary-image
		await expect(
			firstResult.locator( '.layout-flex-col' )
		).toBeVisible();
		await expect(
			firstResult.locator( '.primary-image' )
		).toBeVisible();
	} );

	test( 'Products search returns results with SingleRow layout', async ( {
		page,
	} ) => {
		await openEntitySearch( page, 'Products' );

		await page.locator( '[cmdk-input]' ).fill( 'E2E Test' );

		const firstResult = page.locator( '.entity-renderer' ).first();
		await expect( firstResult ).toBeVisible( { timeout: 10000 } );

		// Products use single-row layout: primary-image + layout-text side by side (no flex-col)
		await expect(
			firstResult.locator( '.primary-image' )
		).toBeVisible();
		await expect(
			firstResult.locator( '.layout-text' )
		).toBeVisible();
	} );

	test( 'Customers search returns results with DoubleRowNoMedia layout', async ( {
		page,
	} ) => {
		await openEntitySearch( page, 'Customers' );

		await page.locator( '[cmdk-input]' ).fill( 'e2e' );

		const firstResult = page.locator( '.entity-renderer' ).first();
		await expect( firstResult ).toBeVisible( { timeout: 10000 } );

		// Customers use double-row-no-media: layout-flex-col WITHOUT primary-image
		await expect(
			firstResult.locator( '.layout-flex-col' )
		).toBeVisible();
		await expect(
			firstResult.locator( '.primary-image' )
		).not.toBeVisible();
	} );

	test( 'selecting a result navigates to edit page', async ( { page } ) => {
		await openEntitySearch( page, 'Products' );

		await page.locator( '[cmdk-input]' ).fill( 'E2E Test Widget' );

		const firstResult = page.locator( '[cmdk-item]' ).first();
		await expect( firstResult ).toBeVisible( { timeout: 10000 } );

		// Click to select (or press Enter)
		await page.keyboard.press( 'Enter' );

		// Should navigate to the WooCommerce product edit page
		await page.waitForURL( /\/(post|admin)\.php\?.*action=edit/i, {
			timeout: 10000,
		} );
		expect( page.url() ).toMatch( /action=edit/ );
	} );

	test( 'aria-live region announces result count', async ( { page } ) => {
		await openEntitySearch( page, 'Orders' );

		await page.locator( '[cmdk-input]' ).fill( 'e2e' );

		// Wait for results
		await expect(
			page.locator( '.entity-renderer' ).first()
		).toBeVisible( { timeout: 10000 } );

		// Check the aria-live region exists and has content
		const ariaLive = page.locator( '[aria-live="polite"][role="status"]' );
		await expect( ariaLive ).toBeAttached();
		await expect( ariaLive ).toContainText( /\d+ orders? found/i );
	} );

	test( 'email prefix search for orders', async ( { page } ) => {
		await openEntitySearch( page, 'Orders' );

		await page
			.locator( '[cmdk-input]' )
			.fill( 'e2e-customer@example.com' );

		// Should find orders associated with this email
		await expect(
			page.locator( '.entity-renderer' ).first()
		).toBeVisible( { timeout: 10000 } );
	} );
} );
