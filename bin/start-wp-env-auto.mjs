// This script starts the local WordPress environment using automatically selected, conflict-free ports.
//
// It tries the default ports first (8888 dev, 8889 tests), and if unavailable, selects random
// high-range ports (30000-60999) that can bind on both IPv6 (::1) and IPv4 (127.0.0.1).
// The chosen ports are written to `.wp-env.override.json` so other tooling (e.g., Playwright)
// can discover them, and then the script runs `wp-env start`.
//
// Based on the approach from ciab-admin/bin/start-wp-env-auto.

/**
 * External dependencies
 */
import { createServer, Socket } from 'node:net';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';

/* eslint-disable no-console */

const cwd = process.cwd();
const baseConfigPath = path.join( cwd, '.wp-env.json' );
const overridePath = path.join( cwd, '.wp-env.override.json' );

/**
 * Checks if we can successfully bind to a port on the given host.
 * Uses a two-step verification:
 * 1. Client-side check: Is something already listening?
 * 2. Server-side check: Can we actually bind/listen on it?
 *
 * @param {number} port - The port number to check
 * @param {string} host - The host address to check
 * @return {Promise<boolean>} True if we can bind to the port, false otherwise
 */
async function canBind( port, host ) {
	if ( await isPortOccupied( port, host ) ) {
		return false;
	}

	return await new Promise( ( resolve ) => {
		const server = createServer();
		server.once( 'error', () => resolve( false ) );
		server.listen( port, host, () => {
			server.close( () => resolve( true ) );
		} );
	} );
}

/**
 * Determines if a port is occupied by attempting to connect to it.
 *
 * @param {number} port - The port number to check
 * @param {string} host - The host address to check
 * @return {Promise<boolean>} True if the port IS occupied, false otherwise
 */
async function isPortOccupied( port, host ) {
	return await new Promise( ( resolve ) => {
		const socket = new Socket();

		socket.setTimeout( 1000 );
		socket.once( 'error', () => resolve( false ) );
		socket.once( 'timeout', () => {
			socket.destroy();
			resolve( false );
		} );
		socket.once( 'connect', () => {
			socket.destroy();
			resolve( true );
		} );

		socket.connect( port, host );
	} );
}

async function getEphemeralPortIPv4() {
	return await new Promise( ( resolve ) => {
		const server = createServer();
		server.listen( 0, '127.0.0.1', () => {
			const { port } = server.address();
			server.close( () => resolve( port ) );
		} );
	} );
}

/**
 * Find an available port that can bind on both IPv4 and optionally IPv6.
 *
 * Strategy:
 * 1. Try the provided default port if valid and not in the avoid set
 * 2. Try up to 60 random ports in the high range (30000-60999)
 * 3. Fall back to OS-assigned ephemeral ports (up to 100 attempts)
 *
 * @param {number}  defaultPort                - Preferred port to try first
 * @param {Set}     [avoid]                    - Set of ports to skip
 * @param {Object}  [options]                  - Configuration options
 * @param {boolean} [options.requireIPv6=true] - Whether to require IPv6 binding
 * @return {Promise<number>} An available port number
 * @throws {Error} If no free port can be found after all attempts
 */
async function findFreePort( defaultPort, avoid = new Set(), options = {} ) {
	const { requireIPv6 = true } = options;

	// 1) Try the provided default port first.
	if (
		Number.isFinite( defaultPort ) &&
		defaultPort > 0 &&
		! avoid.has( defaultPort )
	) {
		const onV4 = await canBind( defaultPort, '127.0.0.1' ).catch(
			() => false
		);
		const onV6 = requireIPv6
			? await canBind( defaultPort, '::1' ).catch( () => false )
			: true;
		if ( onV4 && onV6 ) {
			return defaultPort;
		}
	}

	// 2) Try random candidates in a high, less-crowded range.
	const MIN = 30000;
	const MAX = 60999;
	const tried = new Set();

	for ( let i = 0; i < 60; i++ ) {
		const candidate = Math.floor( Math.random() * ( MAX - MIN + 1 ) ) + MIN;
		if ( avoid.has( candidate ) || tried.has( candidate ) ) {
			continue;
		}
		tried.add( candidate );
		const onV4 = await canBind( candidate, '127.0.0.1' ).catch(
			() => false
		);
		const onV6 = requireIPv6
			? await canBind( candidate, '::1' ).catch( () => false )
			: true;
		if ( onV4 && onV6 ) {
			return candidate;
		}
	}

	// 3) Fallback: ask OS for an ephemeral port on IPv4 and verify IPv6.
	const MAX_EPHEMERAL_ATTEMPTS = 100;
	for ( let attempt = 0; attempt < MAX_EPHEMERAL_ATTEMPTS; attempt++ ) {
		const candidate = await getEphemeralPortIPv4();
		if ( avoid.has( candidate ) ) {
			continue;
		}
		if ( requireIPv6 ) {
			const onV6 = await canBind( candidate, '::1' ).catch( () => false );
			if ( onV6 ) {
				return candidate;
			}
		} else {
			return candidate;
		}
	}

	throw new Error(
		`Failed to find a free port after ${ MAX_EPHEMERAL_ATTEMPTS } ephemeral attempts.`
	);
}

function readJson( file ) {
	try {
		return JSON.parse( readFileSync( file, 'utf8' ) );
	} catch {
		return {};
	}
}

/**
 * Run wp-env start and return the exit code.
 *
 * @return {Promise<number>} The exit code from wp-env start
 */
async function runWpEnvStart() {
	return await new Promise( ( resolve, reject ) => {
		const child = spawn( 'wp-env', [ 'start' ], {
			stdio: 'inherit',
			shell: true,
		} );

		child.on( 'error', ( error ) => {
			reject( new Error( `Failed to spawn wp-env: ${ error.message }` ) );
		} );

		child.on( 'exit', ( code ) => {
			resolve( code ?? 1 );
		} );
	} );
}

async function main() {
	const ipv6Available = await canBind( 0, '::1' ).catch( () => false );
	const base = readJson( baseConfigPath );
	const currentOverride = existsSync( overridePath )
		? readJson( overridePath )
		: {};

	const desiredPort = Number( currentOverride.port ?? base.port ?? 8888 );
	const desiredTestsPort = Number(
		currentOverride.testsPort ?? base.testsPort ?? 8889
	);

	const port = await findFreePort( desiredPort, new Set(), {
		requireIPv6: ipv6Available,
	} );
	const testsPort = await findFreePort(
		desiredTestsPort,
		new Set( [ port ] ),
		{ requireIPv6: ipv6Available }
	);

	const nextOverride = {
		...currentOverride,
		port,
		testsPort,
	};

	console.info(
		`[wp-env:auto] Selected ports → dev: ${ port }, tests: ${ testsPort }`
	);
	writeFileSync( overridePath, JSON.stringify( nextOverride, null, 2 ) );

	const exitCode = await runWpEnvStart();
	process.exit( exitCode );
}

main().catch( ( err ) => {
	console.error( err );
	process.exit( 1 );
} );

/* eslint-enable no-console */
