# Tasks - Bugs, Enhancements & Build System

## Known Bugs

### High (incorrect behavior, security, performance)

- **`general-settings.tsx:76-113`** - Rules of Hooks violation: `useEffect` called after conditional early return in `ShortcutDisplay`. If `shortcut` is falsy, this will crash at runtime.

## Enhancements

### Architecture Improvements

- **Frontend provider registration is hardcoded** - `provider-manager.ts` uses an if/else to select between Default and Algolia. No filter/hook mechanism for third-party JS providers.
- **`searchAll` exists in the Provider interface but is unused** in the command palette UI. The main list doesn't offer a cross-entity search mode.
- **Algolia `objectID` parsed with `parseInt`** (`algolia.tsx:31,74`) - Returns `NaN` for non-numeric IDs.
- **`AdminNotice.php:49`** - Uses `$notice['type']` directly as CSS class; WordPress expects `notice-{type}` pattern.
- **`HasSettings` trait methods** lack return type declarations.
- **Two separate `Batchable` interfaces** exist (`Providers/Contracts/Batchable` and `Entities/Contracts/Batchable`) with the same short name.

## Build & Distribution

### Bundle Size (~1.0 MB index.js)

- `react-router-dom` v7 (~50KB+ gzipped) is heavyweight for a 2-route memory router. Could be replaced with a simple state machine or `wouter`.
- `@wordpress/icons` is bundled inline (not externalized) due to custom webpack plugin config.
- `@emotion/styled` is only used in settings pages, not the command palette.
- No code splitting via dynamic imports despite `chunkFilename` being configured.
- `@dnd-kit` brings 4 packages for a single sortable table in settings.

### Dev Tooling Gaps

- **No tests** - `test:unit` and `test:e2e` scripts exist but zero test files.
- **No CI/CD** - No GitHub Actions workflows or similar. Add workflow for build + lint + phpcs + phpstan.
- **No pre-commit hooks** - No Husky/lint-staged. Code can be committed without passing lint.
- **PHPStan at level 5** - Could incrementally raise to 6-7.

### Build Config Issues

- `webpack.config.js:10` - `chunkFilename` configured but no dynamic imports exist to use it.
- No CSS output for settings entry point (uses @emotion CSS-in-JS runtime, causing FOUC).

---

## React Performance & UI Audit (Vercel Best Practices + UI Skills)

### Bundle Optimization (CRITICAL)

- [ ] **`src/index.js`** - Zero dynamic `import()` calls. Entire 1MB bundle loaded eagerly. Use webpack dynamic imports for `EntityList`, Algolia provider, `react-transition-group`, `change-case`.
- [ ] **`src/providers/provider-manager.ts:1-7`** - Algolia SDK imported unconditionally even when provider is `default`. Use dynamic `import('./algolia')` conditionally.
- [ ] **`src/command/icon.tsx:1-27`** - 23 named imports from `@wordpress/icons` barrel file. Since the lib is bundled (not externalized), this pulls the entire icon library. Import from individual modules instead.
- [ ] **`src/command/entity-renderer.tsx:1`** - `change-case` barrel import for a single `camelCase` function. Replace with a 3-line inline utility: `str.replace(/_([a-z])/g, (_, c) => c.toUpperCase())`.
- [ ] **`src/command/entity.tsx:11`** - `react-transition-group` (~12KB) imported for a single loading fade animation. Replaceable with pure CSS transitions.

### Re-render Optimization (HIGH)

- [ ] **`settings-context.tsx:193-206`** - `settingsData` context value object recreated every render. All consumers re-render on every state change. Wrap in `useMemo` or split into separate contexts (dispatch vs state).
- [ ] **`settings-context.tsx:103-192`** - `save` callback has `[settings, entities, providerSettings]` deps, recreated on every keystroke. Use refs to read current state, making deps empty.
- [ ] **`algolia.tsx:4-6`** - `searchClient()` called at module scope. Algolia SDK parsed/executed even if user never searches. Lazy-initialize inside search methods.
- [ ] **`provider-settings.tsx:151-154`** - Inline arrow component as `Description` prop creates a new component type every render, remounting the subtree.
- [ ] **`general-settings.tsx:114-136`** - `shortcutValidity` function recreated inside render. Pure function, hoist to module scope.
- [ ] **`general-settings.tsx:138-151`** - `transformedShortcut` pure function defined inside component body. Hoist to module scope.

### Re-render Optimization (MEDIUM)

- [ ] **`entity.tsx:158-160`** - Every `EntityItem` subscribes to `useCommandState`. Arrow key navigation causes all 20 items to re-render. Wrap `EntityItem` in `React.memo()`.
- [ ] **`entity-renderer.tsx:51-56`** - `Object.fromEntries` + `camelCase()` called for every binding on every item on every render. Memoize with `useMemo([entity, item])`.
- [ ] **`portal.tsx:10`** - `document.querySelector(target)` called every render, runs on every keystroke. Cache in `useRef`.
- [ ] **`footer.tsx:7-18`** - `useCurrentEntity` calls `Object.keys(entities).includes(lastPage)` — O(n) array scan. Use `entities[lastPage] ?? null` for O(1).
- [ ] **`entity.tsx:94-128`** - `onEnter`/`onExiting` callbacks are inline arrows recreated every render. Extract to `useCallback`.
- [ ] **`entity.tsx:162-168`** - `useMemo` wrapping trivial one-line property lookups (`getPrimaryLink`, `getSecondaryLink`). The memo overhead exceeds the computation. Remove `useMemo`.
- [ ] **`settings/entities-settings.tsx:50-69`** - `tableColumns` array recreated every render. Memoize or hoist to module scope.
- [ ] **`settings/shared-components/sortable-table/index.tsx:189-199`** - `handleDragEnd` not memoized. Wrap in `useCallback`.

### Accessibility & UI (MEDIUM)

- [ ] **`src/index.js`** - No error boundary around the command palette. Any throw unmounts the entire React tree.
- [ ] **`src/command/entity.tsx`** - No `aria-live` region announcing search result count to screen readers.
- [ ] **`general-settings.tsx:155`** - `<span onClick={toggleRecording}>` is not keyboard accessible. No `role="button"`, `tabIndex`, or `onKeyDown`. Use a `<button>` element.
- [ ] **`general-settings.tsx:140-151`** - `navigator.platform` is deprecated. Use `navigator.userAgentData?.platform` with fallback.
- [ ] **`general-settings.tsx`** - No keyboard shortcut conflict detection. Users can set shortcuts that conflict with browser/WP defaults.

### Code Quality (LOW)

- [ ] **`src/command/icon.tsx:76`** - `ReactNode` and `ErrorInfo` types used without import in `IconErrorBoundary`. Fragile with stricter TS config.
- [ ] **`src/command/loading-icon.tsx:6`** - `forwardRef` component missing `displayName`. Shows as "Anonymous" in React DevTools.
- [ ] **`src/command/utils.ts:23-25`** - `isValidUrl` accepts `string` but callers pass `null`. Add explicit null handling and return type `boolean`.
- [ ] **`settings/shared-components/sortable-table/index.tsx:202-210`** - `getColumnProps` pure function defined inside component. Hoist to module scope.
- [ ] **`settings/shared-components/sortable-table/index.tsx:250`** - `!!data.length` implicit boolean coercion. Use `data.length > 0` for clarity.
- [ ] **`settings/general-settings.tsx:19-66`** - Hardcoded HSL color values in `@emotion/styled` components. Not referencing WP admin CSS variables.
