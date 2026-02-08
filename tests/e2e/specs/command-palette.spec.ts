/**
 * External dependencies
 */
import { test, expect } from '@playwright/test';

const ADMIN_URL = '/wp-admin/';

test.describe( 'Command Palette', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( ADMIN_URL );
		// Wait for the plugin container to be present in the DOM
		await page.waitForSelector( '.merchant-buddy-container', {
			state: 'attached',
		} );
	} );

	test( 'opens palette via Meta+H keyboard shortcut', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );
		await expect( page.locator( '[cmdk-root]' ) ).toBeVisible();
	} );

	test( 'closes palette via Escape key', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );
		await expect( page.locator( '[cmdk-root]' ) ).toBeVisible();

		await page.keyboard.press( 'Escape' );
		await expect( page.locator( '[cmdk-root]' ) ).not.toBeVisible();
	} );

	test( 'entity list shows Orders, Products, and Customers items', async ( {
		page,
	} ) => {
		await page.keyboard.press( 'Meta+h' );
		await expect( page.locator( '[cmdk-root]' ) ).toBeVisible();

		const items = page.locator( '[cmdk-item]' );
		await expect( items ).toHaveCount( 3 );

		await expect(
			page.locator( '[cmdk-item]', { hasText: 'Orders' } )
		).toBeVisible();
		await expect(
			page.locator( '[cmdk-item]', { hasText: 'Products' } )
		).toBeVisible();
		await expect(
			page.locator( '[cmdk-item]', { hasText: 'Customers' } )
		).toBeVisible();
	} );

	test( 'navigates to entity and shows breadcrumb badge', async ( {
		page,
	} ) => {
		await page.keyboard.press( 'Meta+h' );
		await page
			.locator( '[cmdk-item]', { hasText: 'Orders' } )
			.click();

		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).toBeVisible();
		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).toHaveText( 'Orders' );
	} );

	test( 'placeholder text updates per entity', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );

		// At root, placeholder should prompt to select
		const input = page.locator( '[cmdk-input]' );
		await expect( input ).toHaveAttribute(
			'placeholder',
			'Select something to search'
		);

		// Navigate to Orders
		await page
			.locator( '[cmdk-item]', { hasText: 'Orders' } )
			.click();
		await expect( input ).toHaveAttribute(
			'placeholder',
			/Search orders/i
		);
	} );

	test( 'Backspace navigates back when search is empty', async ( {
		page,
	} ) => {
		await page.keyboard.press( 'Meta+h' );

		// Navigate to Products
		await page
			.locator( '[cmdk-item]', { hasText: 'Products' } )
			.click();
		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).toBeVisible();

		// Press Backspace with empty input to go back
		await page.keyboard.press( 'Backspace' );

		// Should be back at root with entity list
		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).not.toBeVisible();
		await expect(
			page.locator( '[cmdk-item]', { hasText: 'Orders' } )
		).toBeVisible();
	} );

	test( 'arrow key navigation selects items', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );

		const items = page.locator( '[cmdk-item]' );
		await expect( items ).toHaveCount( 3 );

		// First item should be selected by default (aria-selected)
		await expect( items.first() ).toHaveAttribute(
			'aria-selected',
			'true'
		);

		// Arrow down to second item
		await page.keyboard.press( 'ArrowDown' );
		await expect( items.nth( 1 ) ).toHaveAttribute(
			'aria-selected',
			'true'
		);

		// Arrow down to third item
		await page.keyboard.press( 'ArrowDown' );
		await expect( items.nth( 2 ) ).toHaveAttribute(
			'aria-selected',
			'true'
		);
	} );

	test( 'loading state visible during search', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );

		// Navigate to an entity
		await page
			.locator( '[cmdk-item]', { hasText: 'Orders' } )
			.click();

		// Type a search query; loading icon should appear
		await page.locator( '[cmdk-input]' ).fill( 'test' );
		await expect(
			page.locator( '.pinot.loading' )
		).toBeVisible( { timeout: 5000 } );
	} );

	test( 'empty results message for non-matching query', async ( {
		page,
	} ) => {
		await page.keyboard.press( 'Meta+h' );
		await page
			.locator( '[cmdk-item]', { hasText: 'Orders' } )
			.click();

		await page
			.locator( '[cmdk-input]' )
			.fill( 'zzznonexistentquery999' );

		// Wait for the empty state to appear after the search resolves
		await expect( page.locator( '[cmdk-empty]' ) ).toBeVisible( {
			timeout: 10000,
		} );
		await expect( page.locator( '[cmdk-empty]' ) ).toContainText(
			'No orders found'
		);
	} );

	test( 'clicking outside palette closes it', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );
		await expect( page.locator( '[cmdk-root]' ) ).toBeVisible();

		// Click outside the dialog using mouse (body locator is blocked by Radix scroll lock)
		await page.mouse.click( 10, 10 );
		await expect( page.locator( '[cmdk-root]' ) ).not.toBeVisible();
	} );

	test( 're-opening palette within 5s preserves navigation state', async ( { page } ) => {
		await page.keyboard.press( 'Meta+h' );

		// Navigate into Products
		await page
			.locator( '[cmdk-item]', { hasText: 'Products' } )
			.click();
		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).toBeVisible();

		// Close and re-open quickly — state should be preserved
		await page.keyboard.press( 'Escape' );
		await page.keyboard.press( 'Meta+h' );

		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).toHaveText( 'Products' );
	} );

	test( 're-opening palette after 5s resets to root state', async ( { page } ) => {
		await page.clock.install();
		await page.keyboard.press( 'Meta+h' );

		// Navigate into Products
		await page
			.locator( '[cmdk-item]', { hasText: 'Products' } )
			.click();
		await expect(
			page.locator( '[cmdk-vercel-badge]' )
		).toBeVisible();

		// Close and advance past the 5s clear timeout
		await page.keyboard.press( 'Escape' );
		await page.clock.fastForward( 5000 );
		await page.keyboard.press( 'Meta+h' );

		// Should show the entity list again (root route)
		await expect(
			page.locator( '[cmdk-item]', { hasText: 'Orders' } )
		).toBeVisible();
	} );

	test( 'footer shows keyboard hints when inside entity with results', async ( {
		page,
	} ) => {
		await page.keyboard.press( 'Meta+h' );
		await page
			.locator( '[cmdk-item]', { hasText: 'Orders' } )
			.click();

		// Type a search to get results
		await page.locator( '[cmdk-input]' ).fill( 'e2e' );

		// Wait for results to load
		await expect( page.locator( '[cmdk-item]' ).first() ).toBeVisible( {
			timeout: 10000,
		} );

		// Footer should be visible with keyboard hints
		await expect( page.locator( '.command-footer' ) ).toBeVisible();
		await expect( page.locator( '.command-footer kbd' ) ).toBeVisible();
	} );

	test( 'Meta+H toggles palette open and closed', async ( { page } ) => {
		// Open
		await page.keyboard.press( 'Meta+h' );
		await expect( page.locator( '[cmdk-root]' ) ).toBeVisible();

		// Toggle closed
		await page.keyboard.press( 'Meta+h' );
		await expect( page.locator( '[cmdk-root]' ) ).not.toBeVisible();
	} );
} );
