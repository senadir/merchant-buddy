import { IconElement } from '../icon';
import './styles.css';

const PrimaryImage = ({ primaryImage }: { primaryImage: string }) => {
	if (primaryImage.startsWith('icon:')) {
		const icon = primaryImage.split(':')[1];
		return <IconElement value={icon} />;
	}
	return (
		<img className="primary-image" src={primaryImage} alt={primaryImage} />
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
			<div className="primary-image">
				<PrimaryImage primaryImage={primaryImage} />
			</div>
			<div className="layout-text">{primaryText}</div>
			<div className="layout-secondary-text">
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
			<div className="primary-image">
				<PrimaryImage primaryImage={primaryImage} />
			</div>
			<div className="layout-flex-col">
				<div className="layout-text">{primaryText}</div>
				<div className="layout-secondary-text">
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
		<div className="layout-flex-col">
			<div className="layout-text">{primaryText}</div>
			<div className="layout-secondary-text">
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
