# Entities

Entities are the core of the search, they are the ones that will be searched against, and they are the ones that will be displayed in the search results.

## Nadir\MerchantBuddy\Entities\AbstractEntity

All entities should extend the `AbstractEntity` class, which initself implments `EntityInterface`.

`AbstactEntity` injects the currently selected provider into the entity, which can be accessed via `$this->provider`.

## Nadir\MerchantBuddy\Entities\EntityInterface

Entities are required to implmenet EntityInterface, which enforces the following methods:

- `get_entity_slug(): string`: Returns a unique slug for the entity, to avoid dubplicates, this should be whatever slug WordPress will use, like a custom post type or taxonomy or user role.
- `get_entity_label(): string`: Returns a plural, human readable name for the entity.
- `init_hooks(): void`: Should be where hooks to create, update, and delete items for this entity are registred.
- `search( query: string): array`: Is only relevant if you're using default provider, a method used to search entity based on a search query.
- `get_item_data( object $item ): array`: Should take an entity object (order, customer, product...) and returns an array of which data to persist, this will also be the data used in frontend.
- `layout(): array`: Returns an array that describes which template to use, how to bind its values, and what actions to use. The array has the following shape:
  - `template: string`: The class name of the template to use. Read more about templates [here](./template.md).
  - `bindings`: An array that describes how to bind the values to the template. Read more about bindings [here](./binding.md).

Bindings should be an array of key value pairs, where the key references a placeholder in the template, and value references a value from the `get_item_data` array, or a transformation for that value.

The following transformations are supported:

- Direct value: will use the value directly in the template. If the placeholder type is an image, you can return an url to be used for that image src. If the placeholder is a text, the value will be used text node.

- Placeholder value (sprintf): will insert the value into a predefined string, this should be an array of the string with placeholders (`%s`) and the remaining values to insert into the string. Values should reference keys from `get_item_data` array. See [`sprintf` docs](https://www.npmjs.com/package/sprintf-js) for more details.

- Function value: Will excute a predefined function with the value as argument, this can be nested with placeholder values. Function value replaces the use of a direct key for calling a function with that key. The shape of a function call is the following:

  - `function: string`: a predefined function to use, current options are: `icon`, and `formatted`.
  - `key: string`: The value to be passed to the function, should reference a key from the `get_item_data` array.
  - `args: array`: An array of additional values to be passed to the function, those are static values.

- Multiple values: for template bindings that support multiple values, you can pass an array of any of the above, and they will be transformed and concatenated in frontend, after removing any undefined/null values.

Keys referencing data from `get_item_data` array can be nested via dot notation.

Bindings also bind actions, which only accept a link from the `get_item_data` array.

Alongside template placeholder data, you can pass actions arrays:

- `primary_action: array`: All entities must provide a primary action, which contains a label, a human readable name for the action, and url, a key referencing an url from the `get_item_data` array.

- `secondary_action: array`: Secondary actions are optional and have the same shape as a primary action.

## Nadir\MerchantBuddy\Entities\Contracts\Batchable

Entities that support batch queries should implement a `Batchable` contract, which require a single method:

- `get_items( int $page = 1, int $per_page = 10 ): array`: Takes current pagination and returns an array of length `$per_page` and items of `get_item_data` array shape.
