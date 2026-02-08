/**
 * External dependencies
 */
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const baseURL = process.env.WP_BASE_URL || 'http://localhost:8889';

export default defineConfig( {
	testDir: './specs',
	outputDir: './results',
	fullyParallel: false,
	forbidOnly: !! process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: 1,
	reporter: process.env.CI ? 'github' : 'list',
	globalSetup: require.resolve( './setup/global-setup' ),
	use: {
		baseURL,
		storageState: path.join( __dirname, 'setup', '.auth', 'admin.json' ),
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure',
		viewport: { width: 1280, height: 720 },
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices[ 'Desktop Chrome' ] },
		},
	],
	timeout: 30_000,
	expect: {
		timeout: 10_000,
	},
} );
