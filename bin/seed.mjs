// Seeds a wp-env instance with sample WooCommerce data for development and testing.
//
// Usage:
//   bun bin/seed.mjs            # Seeds the dev environment (cli)
//   bun bin/seed.mjs --env=tests # Seeds the tests environment (tests-cli)
//
// Idempotency: checks for products with the "seed-" SKU prefix before creating.
// If seed data already exists, the script skips seeding.

/**
 * External dependencies
 */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* eslint-disable no-console */

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const data = JSON.parse(
	readFileSync( path.join( __dirname, 'seed-data.json' ), 'utf8' )
);

/**
 * Parse CLI arguments for --env flag.
 *
 * @return {string} The wp-env CLI container name ('cli' or 'tests-cli').
 */
function getCliContainer() {
	const envArg = process.argv.find( ( arg ) => arg.startsWith( '--env=' ) );
	const env = envArg ? envArg.split( '=' )[ 1 ] : 'dev';

	if ( env === 'tests' ) {
		return 'tests-cli';
	}
	return 'cli';
}

/**
 * Execute a WP-CLI command inside wp-env.
 *
 * @param {string}  cmd                    - The wp command (without 'wp' prefix).
 * @param {Object}  [options]              - Options.
 * @param {boolean} [options.porcelain]    - If true, adds --porcelain and returns trimmed output.
 * @param {boolean} [options.allowFailure] - If true, returns null on failure instead of throwing.
 * @return {string|null} Command output (trimmed) or null on allowed failure.
 */
function wp( cmd, { porcelain = false, allowFailure = false } = {} ) {
	const container = getCliContainer();
	const porcelainFlag = porcelain ? ' --porcelain' : '';
	const fullCmd = `bunx wp-env run ${ container } -- wp ${ cmd }${ porcelainFlag }`;

	try {
		const output = execSync( fullCmd, {
			encoding: 'utf8',
			stdio: [ 'pipe', 'pipe', 'pipe' ],
		} );
		return output.trim();
	} catch ( error ) {
		if ( allowFailure ) {
			return null;
		}
		console.error( `Command failed: ${ fullCmd }` );
		console.error( error.stderr || error.message );
		process.exit( 1 );
	}
	return null;
}

/**
 * Extract the ID from wp-env porcelain output.
 * wp-env wraps output with container info lines, so we look for a bare numeric line.
 *
 * @param {string} output - Raw output from wp-env run.
 * @return {number|null} The extracted ID, or null if not found.
 */
function extractId( output ) {
	if ( ! output ) {
		return null;
	}
	const lines = output.split( '\n' );
	for ( const line of lines ) {
		const trimmed = line.trim();
		if ( /^\d+$/.test( trimmed ) ) {
			return parseInt( trimmed, 10 );
		}
	}
	return null;
}

/**
 * Check if seed data already exists by searching for products with the seed- SKU prefix.
 *
 * @return {boolean} True if seed data was found.
 */
function seedDataExists() {
	const result = wp(
		'wc product list --sku=seed- --field=id --format=count --user=1',
		{ allowFailure: true }
	);

	if ( ! result ) {
		return false;
	}

	// Look for a numeric count in the output.
	const lines = result.split( '\n' );
	for ( const line of lines ) {
		const trimmed = line.trim();
		if ( /^\d+$/.test( trimmed ) && parseInt( trimmed, 10 ) > 0 ) {
			return true;
		}
	}
	return false;
}

/**
 * Ensure a WooCommerce product category exists, creating it if necessary.
 *
 * @param {string} name - Category name.
 * @return {number} The category term ID.
 */
function ensureCategory( name ) {
	// Try to find existing category.
	const existing = wp(
		`wc product_cat list --search="${ name }" --field=id --format=csv --user=1`,
		{ allowFailure: true }
	);

	if ( existing ) {
		const id = extractId( existing );
		if ( id ) {
			return id;
		}
	}

	// Create new category.
	const output = wp(
		`wc product_cat create --name="${ name }" --user=1`,
		{ porcelain: true }
	);

	const id = extractId( output );
	if ( ! id ) {
		console.error( `Failed to create category: ${ name }` );
		process.exit( 1 );
	}
	return id;
}

/**
 * Create all products from seed data.
 *
 * @return {number[]} Array of created product IDs (indexed to match seed data).
 */
function createProducts() {
	console.log( '\n--- Creating Products ---' );
	const categoryCache = {};
	const productIds = [];

	for ( const product of data.products ) {
		// Resolve categories to IDs.
		const catIds = ( product.categories || [] ).map( ( catName ) => {
			if ( ! categoryCache[ catName ] ) {
				categoryCache[ catName ] = ensureCategory( catName );
				console.log(
					`  Category "${ catName }" -> ID ${ categoryCache[ catName ] }`
				);
			}
			return categoryCache[ catName ];
		} );

		const catArg =
			catIds.length > 0
				? ` --categories='${ JSON.stringify(
						catIds.map( ( id ) => ( { id } ) )
				  ) }'`
				: '';

		const saleArg = product.sale_price
			? ` --sale_price="${ product.sale_price }"`
			: '';

		const stockArgs = product.manage_stock
			? ` --manage_stock=true --stock_quantity=${ product.stock_quantity }`
			: '';

		const output = wp(
			`wc product create --name="${ product.name }" --type=simple --sku="${ product.sku }" --regular_price="${ product.regular_price }"${ saleArg } --description="${ product.description }" --short_description="${ product.short_description }"${ stockArgs }${ catArg } --user=1`,
			{ porcelain: true }
		);

		const id = extractId( output );
		if ( ! id ) {
			console.error( `Failed to create product: ${ product.name }` );
			process.exit( 1 );
		}
		productIds.push( id );
		console.log( `  Product "${ product.name }" -> ID ${ id }` );
	}

	return productIds;
}

/**
 * Create all customers from seed data.
 *
 * @return {number[]} Array of created customer IDs (indexed to match seed data).
 */
function createCustomers() {
	console.log( '\n--- Creating Customers ---' );
	const customerIds = [];

	for ( const customer of data.customers ) {
		const billingArgs = Object.entries( customer.billing )
			.map(
				( [ key, value ] ) =>
					`--billing.${ key }="${ value }"`
			)
			.join( ' ' );

		const shippingArgs = Object.entries( customer.shipping )
			.map(
				( [ key, value ] ) =>
					`--shipping.${ key }="${ value }"`
			)
			.join( ' ' );

		const output = wp(
			`wc customer create --email="${ customer.email }" --first_name="${ customer.first_name }" --last_name="${ customer.last_name }" --username="${ customer.username }" ${ billingArgs } ${ shippingArgs } --user=1`,
			{ porcelain: true }
		);

		const id = extractId( output );
		if ( ! id ) {
			console.error(
				`Failed to create customer: ${ customer.first_name } ${ customer.last_name }`
			);
			process.exit( 1 );
		}
		customerIds.push( id );
		console.log(
			`  Customer "${ customer.first_name } ${ customer.last_name }" -> ID ${ id }`
		);
	}

	return customerIds;
}

/**
 * Create all orders from seed data, linking them to created products and customers.
 *
 * @param {number[]} productIds  - Array of product IDs (indexed to match seed data).
 * @param {number[]} customerIds - Array of customer IDs (indexed to match seed data).
 * @return {number[]} Array of created order IDs.
 */
function createOrders( productIds, customerIds ) {
	console.log( '\n--- Creating Orders ---' );
	const orderIds = [];

	for ( let i = 0; i < data.orders.length; i++ ) {
		const order = data.orders[ i ];
		const customerId = customerIds[ order.customer_index ];
		const customer = data.customers[ order.customer_index ];

		// Build line_items JSON.
		const lineItems = order.line_items.map( ( item ) => ( {
			product_id: productIds[ item.product_index ],
			quantity: item.quantity,
		} ) );

		// Build billing args from customer data.
		const billingArgs = Object.entries( customer.billing )
			.map(
				( [ key, value ] ) =>
					`--billing.${ key }="${ value }"`
			)
			.join( ' ' );

		const output = wp(
			`wc shop_order create --customer_id=${ customerId } --status=${ order.status } --line_items='${ JSON.stringify( lineItems ) }' ${ billingArgs } --user=1`,
			{ porcelain: true }
		);

		const id = extractId( output );
		if ( ! id ) {
			console.error( `Failed to create order #${ i + 1 }` );
			process.exit( 1 );
		}
		orderIds.push( id );

		const productNames = order.line_items
			.map( ( item ) => data.products[ item.product_index ].name )
			.join( ', ' );
		console.log(
			`  Order #${ id } (${ order.status }) for ${ customer.first_name } ${ customer.last_name } -> [${ productNames }]`
		);
	}

	return orderIds;
}

function main() {
	const container = getCliContainer();
	const envLabel = container === 'tests-cli' ? 'tests' : 'dev';
	console.log( `Seeding WooCommerce data for ${ envLabel } environment...` );

	// Idempotency check.
	if ( seedDataExists() ) {
		console.log(
			'\nSeed data already exists (found products with "seed-" SKU prefix). Skipping.'
		);
		console.log(
			'To re-seed, first destroy the environment with `wp-env destroy` then start fresh.'
		);
		return;
	}

	const productIds = createProducts();
	const customerIds = createCustomers();
	createOrders( productIds, customerIds );

	console.log( `\nDone! Created:` );
	console.log( `  ${ productIds.length } products` );
	console.log( `  ${ customerIds.length } customers` );
	console.log( `  ${ data.orders.length } orders` );
}

main();

/* eslint-enable no-console */
