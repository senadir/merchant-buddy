import { Command, useCommandState } from 'cmdk';
import {
	useMemo,
	useEffect,
	useState,
	useCallback,
	useRef,
} from '@wordpress/element';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CSSTransition } from 'react-transition-group';
import { provider } from '../providers/provider-manager';
import { EntityRenderer } from './entity-renderer';
import { useSettings } from './settings-context';
import {
	getPrimaryLink,
	getSecondaryLink,
	preloadUrl,
	isValidUrl,
} from './utils';
import { Portal } from './portal';
import { LoadingIcon } from './loading-icon';
import { sprintf, __ } from '@wordpress/i18n';
const EntityList = () => {
	const { entity: entityKey = '' } = useParams();
	const { entities } = useSettings();
	const entity = entities[entityKey];
	const [searchParams] = useSearchParams();
	const loadingIconRef = useRef<HTMLDivElement>(null);
	const search = searchParams.get('search') ?? '';
	const [shiftPressed, setShiftPressed] = useState(false);
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			setShiftPressed(event.shiftKey);
		};
		const handleKeyUp = (event: KeyboardEvent) => {
			setShiftPressed(event.shiftKey);
		};
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);
	const {
		data: items,
		isSuccess,
		error,
		isFetched,
		isFetching,
	} = useQuery({
		queryKey: ['provider', entityKey, search],
		queryFn: ({ signal }) => provider.search(search, entityKey, signal),
		enabled: !!search,
		placeholderData: (previousData) => (search ? previousData : []),
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchInterval: 0,
		refetchIntervalInBackground: false,
		refetchOnReconnect: false,
	});

	return (
		<>
			{items?.length === 0 && isFetched && isSuccess && (
				<Command.Empty>
					{sprintf(
						// translators: %1$s: The entity label, %2$s: The search query.
						__('No %1$s found for "%2$s"', 'merchant-buddy'),
						entity.label.toLowerCase(),
						search
					)}
				</Command.Empty>
			)}
			{error && (
				<Command.Empty>
					{sprintf(
						// translators: %1$s: The entity label, %2$s: The error message.
						__('Error searching for %1$s: %2$s', 'merchant-buddy'),
						entity.label.toLowerCase(),
						error.message
					)}
				</Command.Empty>
			)}

			<Portal target=".search-buddy-input-portal">
				<CSSTransition
					in={isFetching}
					timeout={800}
					classNames="loading-icon"
					unmountOnExit
					nodeRef={loadingIconRef}
					onEnter={() => {
						loadingIconRef.current?.classList.add(
							'loading',
							'spinning'
						);
					}}
					onExiting={() => {
						const alreadyVisible =
							getComputedStyle(loadingIconRef.current!)
								.opacity !== '0';
						if (alreadyVisible) {
							const innerCircle =
								loadingIconRef.current?.querySelector(
									'.small-circles'
								);
							innerCircle?.addEventListener(
								'animationiteration',
								() => {
									loadingIconRef.current?.classList.remove(
										'spinning'
									);
									innerCircle.addEventListener(
										'animationend',
										() => {
											loadingIconRef.current?.classList.remove(
												'loading'
											);
										}
									);
								}
							);
						} else {
							loadingIconRef.current?.classList.remove('loading');
						}
					}}
				>
					<LoadingIcon ref={loadingIconRef} />
				</CSSTransition>
			</Portal>
			{items &&
				items.map((item) => (
					<EntityItem
						entityKey={entityKey}
						item={item}
						key={item.id}
						shiftPressed={shiftPressed}
					/>
				))}
		</>
	);
};

const EntityItem = ({
	entityKey,
	item,
	shiftPressed,
}: {
	entityKey: string;
	item: any;
	shiftPressed: boolean;
}) => {
	const navigate = useNavigate();
	const { entities } = useSettings();
	const entity = entities[entityKey];
	const selected = useCommandState((state) => {
		return state.value === item.id.toString();
	});

	const primaryLink = useMemo(() => {
		return getPrimaryLink(item, entity);
	}, [item, entity]);

	const secondaryLink = useMemo(() => {
		return getSecondaryLink(item, entity);
	}, [item, entity]);

	const link = shiftPressed && secondaryLink ? secondaryLink : primaryLink;

	useEffect(() => {
		let timeout: number;
		let linkElement: HTMLLinkElement | null = null;
		if (selected && isValidUrl(link)) {
			timeout = window.setTimeout(() => {
				linkElement = preloadUrl(link);
			}, 50);
		}
		return () => {
			clearTimeout(timeout);
			if (linkElement) {
				linkElement.remove();
			}
		};
	}, [selected, link]);
	const handleItemSelect = useCallback(() => {
		if (isValidUrl(link)) {
			window.location.href = link;
		}
		if (link.startsWith('meta://')) {
			navigate(link.replace('meta:/', ''));
		}
	}, [link, navigate]);
	return (
		<Command.Item
			key={item.id}
			value={item.id.toString()}
			className="entity-renderer"
			onSelect={handleItemSelect}
		>
			<EntityRenderer entity={entity} item={item} />
		</Command.Item>
	);
};

export default EntityList;
