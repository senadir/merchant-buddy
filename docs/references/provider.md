# Providers

Providers are the backbone of serving data, they contain the following.

## Nadir\MerchantBuddy\Providers\Contracts\ProviderInterface

Any registered provider must implmenet the ProviderInterface class, which enforces the following methods:

`get_provider_label(): string`: Returns the publibly, transatable, readable name for the provider, to be used in settings page.

`get_provider_slug(): string`: Returns the provider unique slug, to be used in persiting and finding the provider.

`is_ready(): bool`: Returns true if the provider is ready to be used.

`create_item( array $item_data, int $item_id, string $entity_name ): bool`: Should create a correspending item in the provider data storage, the value of `$item_data` is what the provider should return when being searched. `$item_id` is the entity unique ID of the item to add, and `$entity_name` is the name of the entity to add the item to.

`update_item( array $item_data, int $item_id, string $entity_name ): bool`: Should update a correspending item in the provider data storage, the value of `$item_data` is what the provider should return when being searched. `$item_id` is the entity unique ID of the item to update, and `$entity_name` is the name of the entity to update the item to.

`delete_item( int $item_id, string $entity_name ): bool`: Should delete a correspending item in the provider data storage. `$item_id` is the entity unique ID of the item, and `$entity_name` is the name of the entity to delete from.

Refer to [entities item data](./entities.md#item-data) for more information on the data structure of an item.

## Nadir\MerchantBuddy\Providers\Contracts\HasSettings

HasSettings is a trait that indicates if a provider wish to expose settings in the settings page, it enforces the following methods:

`get_settings_fields(): array`: Returns an array of settings fields to be used in the settings page. See below for how fields are composed.

It also provides the following methods which you can override for your case:

`has_settings(): bool`: Indicates if a provider has settings, this is default to `true`.

`get_option_name(): string`: Returns the option name that's used to saved the settings values, this is default to `search_buddy_{provider_slug}_settings`.

`get_settings(): array`: Returns an array of saved values for settings, this default to the value of `get_option( self::get_option_name() )`.

`get_description(): string or array`: Returns either a string to be used for the provider descrepition in settings page, or an array that contains:

- `description: string`: human readable string for the provider description.
- `link: array`: an array that represent a link to be used as an external resource, it contains:
  - `text: string`: the text of the link.
  - `url: string`: the url of the link.

### Fields

Providers define fields to be used in the settings page, the fields are composed of the following:

- `title: string`: the title of the field.
- `type: string`: the type of the field, which can be: `text`, `password`, `checkbox`, and `select`.
- `name: string`: the name of the field, this is used to identify the field in the settings values.
- `description: string`: the description of the field, this is used to describe the field in the settings page.
- `public: bool`: Indeicates if the field value should be exposed to the frontend. If true, the field will be on `window.searchBuddy[providerSlug][fieldName]` in which `fieldName` is the `name` value. This defaults to `false`.
- `options: array`: If the field type is `select`, this option is required, it should be an array of `label: string, value: string` pairs, where `label` is the human readable value, and `value` is what will be saved.

## Nadir\MerchantBuddy\Providers\Contracts\Batchable

Providers that support batch operations should implmenet `Batchable` which

## Provider

On the JS, providers need to implment a `Provider` typescript interface.

```tsx
interface Provider {
  id: string;
  search: (
    query: string,
    entity: string,
    signal?: AbortSignal
  ) => Promise<Item[]>;
  searchAll: (
    query: string,
    signal?: AbortSignal
  ) => Promise<Record<string, Item[]>>;
}
```

- `id: string`: Should return the provider id, this matches what you have in PHP.

- `search( query: string, entity: string, signal: AbortSignal): Promise<Item[]> | Item[]`: Is a search function that should take the search query, and against which entity this is being searched. It also provides an abort signal to be used to cancel a request. `search` should return a promise that fullfils to an array of items, or directly to items.

- `searchAll( query: string, singal: AbortSignal): Promise<Record<string, Item[]>> | Record<string, Item[]>`: Similar to search, searchAll is meant to search across all entities. It should return a promise that fullfils to an object, whos keys are entities, and values are the result in each entity, or that result directly.

An item data should match what was passed in PHP, but should at least, always, contain the following:

```tsx
interface Item extends Record<string, unknown> {
  id: number;
  name: string;
}
```
