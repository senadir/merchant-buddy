# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Merchant Buddy is a WooCommerce plugin that adds a command palette (cmdk-based) for searching orders, products, and customers from any admin page. It supports pluggable search providers (native WooCommerce, Algolia) and renders results using configurable entity templates.

## Build & Development Commands

```bash
npm run build          # Production build (wp-scripts)
npm run start          # Dev mode with watch
npm run lint:js        # ESLint (WordPress + TanStack Query rules)
npm run lint:css       # Stylelint
npm run format         # Prettier
npm run plugin-zip     # Package for distribution (runs composer install --no-dev first)
```

PHP linting:
```bash
vendor/bin/phpcs                    # PHP_CodeSniffer (WooCommerce-Core ruleset)
vendor/bin/phpstan analyse          # PHPStan level 5, includes/ only
```

There are no test suites currently in use (`test:unit` and `test:e2e` scripts exist but no test files).

WP-CLI batch command (requires WordPress environment):
```bash
wp wc buddy batch update [entity] --provider=algolia --per-page=20
wp wc buddy batch delete [entity]
```

## Architecture

### Dual Entrypoints

The plugin has two separate JS entrypoints, each with its own build output:

- **`src/index.js`** - Command palette UI. Rendered on all admin pages (and optionally frontend). Uses `react-router-dom` (memory router), `cmdk`, `@tanstack/react-query`, and `react-hotkeys-hook`. Config injected via `window.searchBuddy`.
- **`src/settings.js`** - Settings page UI. Rendered inside WooCommerce Integration settings tab. Uses `@wordpress/components`, `@emotion/styled`, `@dnd-kit` for sortable entities. Config injected via `window.hydratedScreenSettings`.

### PHP Backend (`includes/`, namespace `Nadir\MerchantBuddy`)

- **`SearchManager`** - Main orchestrator. Loads settings, instantiates the provider and entities, enqueues scripts, registers WP-CLI commands. Bootstrapped in `merchant-buddy.php` via `plugins_loaded`.
- **`SearchSettings`** (extends `WC_Integration`) - Registers REST API settings (`/wp/v2/settings`), enqueues settings scripts, hydrates client config. Registered via `woocommerce_integrations` filter.

**Provider system** (`includes/Providers/`):
- `ProviderInterface` - Contract: `create_item`, `update_item`, `delete_item`, `is_ready`, `get_provider_slug/label`
- `Batchable` contract - Adds `batch_update_items`, `batch_delete_items`
- `HasSettings` trait - Adds `get_settings`, `get_fields`, `get_description` for providers with configurable options
- `DefaultProvider` - Searches via WooCommerce REST API (`/wc/merchant-buddy/default/search/`)
- `Algolia` - Indexes/searches via Algolia PHP client

**Entity system** (`includes/Entities/`):
- `EntityInterface` - Contract: `layout`, `search`, `get_item_data`, `init_hooks`, `get_entity_slug/label`
- `AbstractEntity` - Base class providing provider injection and filterable `searchable_fields`/`display_fields`
- Concrete: `Orders`, `Products`, `Customers` - Each hooks into WooCommerce CRUD actions to sync items with the provider
- `Templates/` - Layout templates (`DoubleRow`, `SingleRow`, `DoubleRowNoMedia`) that define how entity results render

Entities are extensible via `merchant_buddy_available_entities` filter. Providers via `merchant_buddy_available_providers` filter.

### Frontend Provider System (`src/providers/`)

Mirrors the PHP provider pattern on the client side:
- `Provider` interface (`types.ts`) - `search(query, entity, signal)` and `searchAll(query, signal)`
- `default.tsx` - Uses `@wordpress/api-fetch` to call the WP REST endpoint
- `algolia.tsx` - Uses `@algolia/client-search` directly from the browser
- `provider-manager.ts` - Selects provider based on `window.searchBuddy.main.provider`, exposes `useProvider()` hook wrapping TanStack Query

### Template/Binding System

Entity display is data-driven. PHP entities define a `layout()` returning a template class and field bindings. The frontend `EntityRenderer` (`src/command/entity-renderer.tsx`) resolves bindings against item data and renders the matched layout component (`src/command/layouts/`).

## Key Conventions

- **PHP**: PSR-4 autoloading (`Nadir\MerchantBuddy\` -> `includes/`). WooCommerce-Core coding standard. `strict_types` required in `includes/`. Class filenames follow PSR convention (not WordPress hyphenated).
- **JS/TS**: Mixed JS/TS codebase. ESLint extends `@wordpress/eslint-plugin/recommended` + `@tanstack/query/recommended`. Uses `@wordpress/element` (React wrapper), `@wordpress/i18n` for translations. Text domain: `merchant-buddy`.
- **Webpack**: Extends `@wordpress/scripts` default config. Custom `DependencyExtractionWebpackPlugin` config that bundles `@wordpress/icons` instead of externalizing it.
- Settings are persisted via WP options API: `merchant_buddy_main_settings`, `merchant_buddy_enabled_entities`, and per-provider `merchant_buddy_{slug}_provider_settings`.
- WooCommerce HPOS compatibility is declared.

## Review & Planning Documents

- **[tasks.md](./tasks.md)** - Known bugs (critical/high/medium), enhancements, unused dependencies, dead code, bundle size issues, build config, and dev tooling gaps.
- **[product.md](./product.md)** - Feature completeness assessment, UX gaps, competitive landscape, monetization strategy, WordPress.org listing improvements, and versioned roadmap (v1.1/v1.2/v2.0).
