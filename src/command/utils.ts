import { Entity } from './settings-context';

export function getPrimaryLink(item: any, entity: Entity) {
	const primaryAction = entity.bindings?.primary_action;
	return item[primaryAction?.url] ? item[primaryAction?.url] : null;
}

export function getSecondaryLink(item: any, entity: Entity) {
	const secondaryAction = entity.bindings?.secondary_action;
	return secondaryAction?.url && item[secondaryAction?.url]
		? item[secondaryAction?.url]
		: null;
}

export function getPrimaryLinkLabel(entity: Entity) {
	return entity.bindings?.primary_action?.label;
}

export function getSecondaryLinkLabel(entity: Entity) {
	return entity.bindings?.secondary_action?.label;
}

export function isValidUrl(url: string) {
	return url && (url.startsWith('http://') || url.startsWith('https://'));
}

export function preloadUrl(url: string): HTMLLinkElement {
	const linkElement = document.createElement('link');
	linkElement.rel = 'prefetch';
	linkElement.href = url;

	linkElement.fetchPriority = 'high';
	// By default, a prefetch is loaded with a low priority.
	// When there’s a fair chance that this prefetch is going to be used in the
	// near term (= after a touch/mouse event), giving it a high priority helps
	// make the page load faster in case there are other resources loading.
	// Prioritizing it implicitly means deprioritizing every other resource
	// that’s loading on the page. Due to HTML documents usually being much
	// smaller than other resources (notably images and JavaScript), and
	// prefetches happening once the initial page is sufficiently loaded,
	// this theft of bandwidth should rarely be detrimental.

	linkElement.as = 'document';
	// as=document is Chromium-only and allows cross-origin prefetches to be
	// usable for navigation. They call it “restrictive prefetch” and intend
	// to remove it: https://crbug.com/1352371
	//
	// This document from the Chrome team dated 2022-08-10
	// https://docs.google.com/document/d/1x232KJUIwIf-k08vpNfV85sVCRHkAxldfuIA5KOqi6M
	// claims (I haven’t tested) that data- and battery-saver modes as well as
	// the setting to disable preloading do not disable restrictive prefetch,
	// unlike regular prefetch. That’s good for prefetching on a touch/mouse
	// event, but might be bad when prefetching every link in the viewport.

	document.head.appendChild(linkElement);

	return linkElement;
}
