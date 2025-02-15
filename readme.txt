=== Merchant Buddy ===
Contributors: assassinateur
Tags: woocommerce, search, orders, products, customers, algolia, performance
Requires at least: 6.4
Tested up to: 6.7.1
Stable tag: 1.0.0
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A lightning-fast contextual search tool for WooCommerce store owners to find orders, products, and customers from any page in your store.

== Description ==

Merchant Buddy is a powerful search tool designed specifically for WooCommerce store owners and managers. It provides a contextual menu that allows you to quickly search and find orders, products, customers, and other entities from anywhere in your WordPress admin area.

For detailed documentation and guides, visit our [documentation website](https://docs.merchant-buddy.com/).

= Key Features =

* Lightning-fast search powered by multiple search providers
* Search across multiple WooCommerce entities:
  * Products
  * Orders
  * Customers
  * Subscriptions (coming soon)
  * Bookings (coming soon)
* Contextual menu accessible from any admin page
* Multiple search backend options:
  * Algolia (recommended for best performance)
  * Native WooCommerce search
  * More providers coming soon (Typesense, Meilisearch)

= Why Merchant Buddy? =

As WooCommerce stores grow, searching through orders, products, and customers becomes increasingly slow and cumbersome. While WooCommerce's HPOS and full-text search have improved order searching, there's still a need for a comprehensive solution that covers all aspects of your store.

= Extensible Architecture =

Merchant Buddy is built with extensibility in mind. Developers can:
* Create custom search providers
* Add support for additional entities
* Customize the search experience

= Premium Features =

The plugin is free to use with your own search provider API keys (bring-your-own-key model).

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/merchant-buddy` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Configure your preferred search provider in the plugin settings
4. Start searching from any admin page!

== Frequently Asked Questions ==

= Which search provider should I use? =

Algolia is recommended for the best performance, but you can also use the native WooCommerce search if you prefer not to use external services.

= Do I need to pay for the plugin? =

The plugin itself is free. However, if you choose to use Algolia or other external search providers, you'll need to sign up for their services and use your own API keys.

= Can I extend the plugin with custom entities? =

Yes! The plugin is built to be extensible. Developers can add support for custom entities and create their own search providers.

== Changelog ==

= 1.0.0 =
* Initial release
* Support for Products and Orders search
* Algolia and native WooCommerce search providers
* Contextual menu interface

== Upgrade Notice ==

= 1.0.0 =
Initial release of Merchant Buddy

== Screenshots ==

1. Contextual search menu
2. Search results interface
3. Plugin settings page
