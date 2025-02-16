import { IconElement } from '../icon';

const PrimaryImage = ({ primaryImage }: { primaryImage: string }) => {
	if (primaryImage.startsWith('icon:')) {
		const icon = primaryImage.split(':')[1];
		return <IconElement value={icon} />;
	}
	return (
		<img
			className="group-[.is-primary-image]:mix-blend-multiply"
			src={primaryImage}
			alt={primaryImage}
		/>
	);
};

const SingleRowLayout = ({
	primaryImage,
	primaryText,
	secondaryText,
}: {
	primaryImage: string;
	primaryText: string;
	secondaryText: string[];
}) => {
	return (
		<>
			<div className="group is-primary-image has-[img]:w-12 has-[img]:h-12">
				<PrimaryImage primaryImage={primaryImage} />
			</div>
			<div className="text-sm text-ellipsis">{primaryText}</div>
			<div className="text-xs text-ellipsis">
				{secondaryText.join(', ')}
			</div>
		</>
	);
};

const DoubleRowLayout = ({
	primaryImage,
	primaryText,
	secondaryText,
}: {
	primaryImage: string;
	primaryText: string;
	secondaryText: string[];
}) => {
	return (
		<>
			<div className="group is-primary-image has-[img]:w-12 has-[img]:h-12">
				<PrimaryImage primaryImage={primaryImage} />
			</div>
			<div className="flex flex-col items-stretch">
				<div className="text-sm text-ellipsis">{primaryText}</div>
				<div className="text-xs text-ellipsis">
					{secondaryText.join(', ')}
				</div>
			</div>
		</>
	);
};

const DoubleRowNoMediaLayout = ({
	primaryText,
	secondaryText,
}: {
	primaryText: string;
	secondaryText: string[];
}) => {
	return (
		<div className="flex flex-col items-stretch">
			<div className="text-sm text-ellipsis">{primaryText}</div>
			<div className="text-xs text-ellipsis">
				{secondaryText.join(', ')}
			</div>
		</div>
	);
};

export const layouts = {
	'single-row': SingleRowLayout,
	'double-row': DoubleRowLayout,
	'double-row-no-media': DoubleRowNoMediaLayout,
};
