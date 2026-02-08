/**
 * External dependencies
 */
import { test, expect } from '@playwright/test';

const SETTINGS_URL =
	'/wp-admin/admin.php?page=wc-settings&tab=integration&section=merchant-buddy';

test.describe( 'Settings Page', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( SETTINGS_URL );
		await page.waitForSelector( '#merchant-buddy-settings' );
	} );

	test( 'settings form renders with enable checkbox, provider dropdown, and entity table', async ( {
		page,
	} ) => {
		// Enable checkbox
		const enableCheckbox = page.locator(
			'input[name="command_palette_enabled"]'
		);
		await expect( enableCheckbox ).toBeVisible();

		// Provider select
		const providerSelect = page.locator(
			'select[name="search_provider"]'
		);
		await expect( providerSelect ).toBeVisible();

		// Entity table
		const entityTable = page.locator( '.entities' );
		await expect( entityTable ).toBeVisible();
	} );

	test( 'toggling checkbox marks form dirty and enables Save button', async ( {
		page,
	} ) => {
		const saveButton = page.getByRole( 'button', {
			name: 'Save changes',
		} );

		// Save button should be disabled initially (form is clean)
		await expect( saveButton ).toBeDisabled();

		// Toggle the enable checkbox
		const enableCheckbox = page.locator(
			'input[name="command_palette_enabled"]'
		);
		await enableCheckbox.click();

		// Save button should now be enabled (dirty)
		await expect( saveButton ).toBeEnabled();
	} );

	test( 'provider dropdown has Default and Algolia options', async ( {
		page,
	} ) => {
		const providerSelect = page.locator(
			'select[name="search_provider"]'
		);
		const options = providerSelect.locator( 'option' );

		// Should have at least Default and Algolia
		await expect( options ).toHaveCount( 2 );

		const optionTexts = await options.allTextContents();
		expect( optionTexts ).toContain( 'Default' );
		expect( optionTexts ).toContain( 'Algolia' );
	} );

	test( 'entity toggles work (enable/disable)', async ( { page } ) => {
		// Find the entity toggle controls inside the table
		const toggles = page.locator(
			'.entities .components-form-toggle'
		);
		await expect( toggles.first() ).toBeVisible();

		const firstToggle = toggles.first();
		const wasChecked = await firstToggle.evaluate( ( el ) =>
			el.classList.contains( 'is-checked' )
		);

		// Click the toggle
		await firstToggle.click();

		// State should flip
		const isChecked = await firstToggle.evaluate( ( el ) =>
			el.classList.contains( 'is-checked' )
		);
		expect( isChecked ).toBe( ! wasChecked );

		// Save button should be enabled (dirty)
		await expect(
			page.getByRole( 'button', { name: 'Save changes' } )
		).toBeEnabled();
	} );

	test( 'Algolia fields appear and become required when Algolia is selected', async ( {
		page,
	} ) => {
		const providerSelect = page.locator(
			'select[name="search_provider"]'
		);

		// Select Algolia provider
		await providerSelect.selectOption( 'algolia' );

		// Algolia-specific fields should now have the "required" attribute
		// The Algolia provider has fields like application_id and admin_api_key
		const algoliaInputs = page.locator(
			'input[required]'
		);
		await expect( algoliaInputs.first() ).toBeVisible( {
			timeout: 5000,
		} );

		// Switch back to default
		await providerSelect.selectOption( 'default' );

		// Algolia fields should no longer be required
		const requiredInputs = page.locator(
			'input[required]'
		);
		await expect( requiredInputs ).toHaveCount( 0 );
	} );

	test( 'Save button shows busy state during save', async ( { page } ) => {
		const saveButton = page.getByRole( 'button', {
			name: 'Save changes',
		} );

		// Make form dirty by toggling an entity
		const toggle = page.locator(
			'.entities .components-form-toggle'
		).first();
		await toggle.click();

		// Set up a listener for the API request
		const savePromise = page.waitForResponse(
			( response ) =>
				response.url().includes( '/wp/v2/settings' ) &&
				response.request().method() === 'POST'
		);

		await saveButton.click();

		// Button should show busy state (has is-busy class)
		await expect( saveButton ).toHaveClass( /is-busy/ );

		// Wait for save to complete
		await savePromise;

		// Button should no longer be busy and should be disabled (clean state)
		await expect( saveButton ).not.toHaveClass( /is-busy/, {
			timeout: 5000,
		} );
	} );

	test( 'settings persist across page reload', async ( { page } ) => {
		const providerSelect = page.locator(
			'select[name="search_provider"]'
		);
		const saveButton = page.getByRole( 'button', {
			name: 'Save changes',
		} );

		// Get current provider value
		const originalProvider = await providerSelect.inputValue();
		const newProvider =
			originalProvider === 'default' ? 'algolia' : 'default';

		// Change provider
		await providerSelect.selectOption( newProvider );

		// Save (if algolia is selected, we need to fill required fields first)
		if ( newProvider === 'algolia' ) {
			// Fill dummy algolia credentials so the form validates
			const requiredInputs = page.locator( 'input[required]' );
			const count = await requiredInputs.count();
			for ( let i = 0; i < count; i++ ) {
				const input = requiredInputs.nth( i );
				const currentValue = await input.inputValue();
				if ( ! currentValue ) {
					await input.fill( 'test-value-e2e' );
				}
			}
		}

		await saveButton.click();

		// Wait for save to complete
		await page.waitForResponse(
			( response ) =>
				response.url().includes( '/wp/v2/settings' ) &&
				response.request().method() === 'POST'
		);

		// Reload the page
		await page.reload();
		await page.waitForSelector( '#merchant-buddy-settings' );

		// Verify the provider selection persisted
		const reloadedProvider = page.locator(
			'select[name="search_provider"]'
		);
		await expect( reloadedProvider ).toHaveValue( newProvider );

		// Restore original setting
		await reloadedProvider.selectOption( originalProvider );

		if ( originalProvider === 'algolia' ) {
			const requiredInputs = page.locator( 'input[required]' );
			const count = await requiredInputs.count();
			for ( let i = 0; i < count; i++ ) {
				const input = requiredInputs.nth( i );
				const currentValue = await input.inputValue();
				if ( ! currentValue ) {
					await input.fill( 'test-value-e2e' );
				}
			}
		}

		await page
			.getByRole( 'button', { name: 'Save changes' } )
			.click();
		await page.waitForResponse(
			( response ) =>
				response.url().includes( '/wp/v2/settings' ) &&
				response.request().method() === 'POST'
		);
	} );

	test( 'success notification appears after save', async ( { page } ) => {
		// Make form dirty
		const toggle = page.locator(
			'.entities .components-form-toggle'
		).first();
		await toggle.click();

		const saveButton = page.getByRole( 'button', {
			name: 'Save changes',
		} );
		await saveButton.click();

		// Wait for the success notice to appear
		await expect(
			page.locator( '.components-snackbar', {
				hasText: 'settings have been saved',
			} )
		).toBeVisible( { timeout: 10000 } );
	} );

	test( 'entity drag-and-drop reorder works', async ( { page } ) => {
		// Get the entity rows in the table
		const rows = page.locator( '.entities tbody tr' );
		await expect( rows ).toHaveCount( 3 );

		// Capture initial order
		const initialOrder = await rows.allTextContents();

		// Find the drag handle on the first row
		const firstDragHandle = rows.first().locator( '[data-movable-handle]' );

		if ( ( await firstDragHandle.count() ) > 0 ) {
			// Perform drag and drop from first row to third row position
			const firstBox = await firstDragHandle.boundingBox();
			const thirdRow = rows.nth( 2 );
			const thirdBox = await thirdRow.boundingBox();

			if ( firstBox && thirdBox ) {
				await page.mouse.move(
					firstBox.x + firstBox.width / 2,
					firstBox.y + firstBox.height / 2
				);
				await page.mouse.down();
				await page.mouse.move(
					thirdBox.x + thirdBox.width / 2,
					thirdBox.y + thirdBox.height / 2,
					{ steps: 10 }
				);
				await page.mouse.up();

				// Order should have changed
				const newOrder = await rows.allTextContents();
				expect( newOrder ).not.toEqual( initialOrder );

				// Save button should be enabled
				await expect(
					page.getByRole( 'button', { name: 'Save changes' } )
				).toBeEnabled();
			}
		}
	} );

	test( 'default state has all entities enabled and default provider', async ( {
		page,
	} ) => {
		// Check provider is "default"
		const providerSelect = page.locator(
			'select[name="search_provider"]'
		);
		await expect( providerSelect ).toHaveValue( 'default' );

		// Check that all entity toggles are checked (enabled)
		const toggles = page.locator(
			'.entities .components-form-toggle'
		);
		const count = await toggles.count();
		expect( count ).toBe( 3 );

		for ( let i = 0; i < count; i++ ) {
			const toggle = toggles.nth( i );
			await expect( toggle ).toHaveClass( /is-checked/ );
		}
	} );

	test( 'provider-specific settings section is visible for Algolia', async ( {
		page,
	} ) => {
		// There should be a provider settings section on the page
		// even when Default is selected. Both providers that have settings
		// are always shown.
		const algoliaSection = page.locator( 'h2', { hasText: 'Algolia' } );
		await expect( algoliaSection ).toBeVisible();
	} );

	test( 'form validation prevents save when Algolia fields are empty', async ( {
		page,
	} ) => {
		const providerSelect = page.locator(
			'select[name="search_provider"]'
		);

		// Select Algolia
		await providerSelect.selectOption( 'algolia' );

		// Clear any existing values in required fields
		const requiredInputs = page.locator( 'input[required]' );
		const count = await requiredInputs.count();
		for ( let i = 0; i < count; i++ ) {
			await requiredInputs.nth( i ).fill( '' );
		}

		// Try to save
		const saveButton = page.getByRole( 'button', {
			name: 'Save changes',
		} );
		await saveButton.click();

		// The form should not have submitted - save button should still be enabled
		// (browser native validation prevents the POST)
		await expect( saveButton ).toBeEnabled();

		// Restore default provider to leave test in clean state
		await providerSelect.selectOption( 'default' );
	} );
} );
