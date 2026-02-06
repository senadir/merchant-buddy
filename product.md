# Product Strategy & Roadmap

## Current State (v1.0.1)

### Delivered
- Command palette UI with cmdk (dialog + embedded mode)
- Three entities: Orders, Products, Customers
- Two search providers: Default (WooCommerce REST API) and Algolia
- Real-time indexing via WooCommerce hooks for all entities
- WP-CLI batch commands for Algolia index management
- Customizable keyboard shortcut with recording UI
- Entity enable/disable and drag-to-reorder in settings
- Shift+Enter secondary action support
- Cross-entity navigation (customer -> their orders via `meta://` URLs)
- Pluggable template system (SingleRow, DoubleRow, DoubleRowNoMedia)
- Settings via WooCommerce Integration tab with REST API persistence
- HPOS compatibility
- Frontend search support (behind setting, gated by `manage_options`)

### Promised but Not Delivered
- Subscriptions entity ("coming soon" in readme.txt)
- Bookings entity ("coming soon")
- Typesense provider ("coming soon")
- Meilisearch provider ("coming soon")

## UX Gaps

### Onboarding
- No activation redirect to settings
- No admin notice introducing the keyboard shortcut
- No setup wizard for Algolia configuration
- No connection test or index health indicator

### Search UX
- No "search all" cross-entity mode (the `searchAll` interface exists but is unused)
- No recent searches or search history
- No faceted search or filters (order status, date range, category)
- No result count indicator
- No pagination / load more (hardcoded limit of 10)
- Order `email:` prefix syntax is undiscoverable
- No visual indicator of active provider
- No debouncing on search input

### Settings
- Settings deeply nested: WooCommerce > Settings > Integration > Merchant Buddy
- Frontend search toggle exists in PHP but has no UI control
- No "reset to default" for keyboard shortcut
- No shortcut conflict detection with browser/WP shortcuts

## Competitive Landscape

**Differentiators:**
1. Command palette UX - unique in the WooCommerce ecosystem
2. External provider support (Algolia) for admin search
3. Cross-entity navigation
4. Keyboard-first design for power users
5. Free + BYOK model

**Risks:**
- WooCommerce core could add a command palette (WP already has Cmd+K in block editor)
- SearchWP/Relevanssi have brand recognition
- Shopify Spotlight-like search sets expectations for WooCommerce merchants

## Monetization

### Current: BYOK (free)
The plugin is entirely free. Users bring their own Algolia API keys.

### Potential Premium Tiers

**Tier 1 - Pro ($49-79/yr):** Additional entities (Subscriptions, Bookings), additional providers (Typesense, Meilisearch), search analytics, recent searches, advanced filters.

**Tier 2 - Hosted ($99-149/yr):** Managed search infrastructure (no BYOK needed), zero-config setup, search analytics dashboard.

**Tier 3 - Agency ($199-299/yr):** Multi-site license, white-label, custom entity support.

## WordPress.org Listing Improvements

- Add screenshots (the #1 driver of installs)
- Add demo GIF in description
- Add v1.0.1 changelog entry (currently missing)
- Expand tags: add `command-palette`, `quick-search`, `order-search`, `customer-search`, `keyboard-shortcut`, `productivity`
- Expand FAQ: keyboard shortcuts, HPOS compatibility, multisite, performance, data privacy
- Remove or date the "coming soon" items to avoid expectation debt

## Roadmap

### v1.1 - Polish & Trust
- Onboarding admin notice showing keyboard shortcut + link to settings
- "Search all" cross-entity mode
- Frontend search toggle in settings UI
- WordPress.org listing improvements (screenshots, tags, FAQ)
- Recent searches (localStorage)
- Result count badge
- Algolia connection test button
- Reset-to-default for keyboard shortcut

### v1.2 - Extensibility & Power Features
- Subscriptions entity (requires WooCommerce Subscriptions detection)
- Bookings entity (requires WooCommerce Bookings detection)
- Typesense provider
- Developer documentation site (fulfill docs.merchant-buddy.com promise)
- Filter/action for frontend provider registration
- Search filters (order status, date range)
- Customizable result templates via filter
- Meilisearch provider
- WP-CLI index health check command

### v2.0 - Platform & Monetization
- Premium tier infrastructure (licensing, updates)
- Hosted search option (managed Meilisearch/Algolia)
- Search analytics dashboard
- Quick actions on results (refund, change status, email customer)
- Fuzzy search / typo tolerance for default provider
- Spotlight-style quick actions (create order, add product)
- Webhook support for external indexing triggers
- AI-powered natural language search ("show me orders from last week over $500")
