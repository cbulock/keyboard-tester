import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Key/Icon';
import { KEYSIZE } from 'consts';

const handleXPosition = (position) => {
	switch (position) {
		case 'top-left':
		case 'bottom-left':
			return 'flex-start';
		case 'top-right':
		case 'bottom-right':
			return 'flex-end';
		default:
			return 'center';
	}
};

const handleYPosition = (position) => {
	switch (position) {
		case 'top-left':
		case 'top-right':
			return 'flex-start';
		case 'bottom-left':
		case 'bottom-right':
			return 'flex-end';
		default:
			return 'center';
	}
};

const determineBackgroundColor = ({ active, hasBeenActive }) => {
	if (active) return '#06a972';
	if (hasBeenActive) return '#9dffde';
	return '#dfdfdf';
};

const SKey = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ position }) => handleXPosition(position)};
	justify-content: ${({ position }) => handleYPosition(position)};
	margin: 4px;
	width: ${({ size }) => size * KEYSIZE - 10}px;
	height: ${KEYSIZE - 10}px;
	border: 1px solid
		${({ hasBeenActive }) => (hasBeenActive ? '#06a972' : '#333')};
	border-radius: 4px;
	background-color: ${(props) => determineBackgroundColor(props)};
`;

const SPrimary = styled.div`
	display: flex;
	align-items: center;
`;

const SLabel = styled.span`
	padding: 4px;
	font-weight: 700;
	font-size: 1.25rem;
`;

const SSecondaryLabel = styled.span`
	padding: 6px;
	font-size: 0.875rem;
`;

const SIcon = styled(Icon)`
	width: 20px;
	padding: 0 4px;
`;

const Key = ({
	label = '',
	secondaryLabel = null,
	startIcon = null,
	endIcon = null,
	size = 1,
	position = 'center',
	active = false,
}) => {
	const [hasBeenActive, setHasBeenActive] = useState(false);

	useEffect(() => {
		if (active) setHasBeenActive(true);
	}, [active]);

	return (
		<SKey
			size={size}
			position={position}
			active={active}
			hasBeenActive={hasBeenActive}
		>
			{!!secondaryLabel && <SSecondaryLabel>{secondaryLabel}</SSecondaryLabel>}
			<SPrimary>
				{startIcon && <SIcon name={startIcon} />}
				<SLabel>{label}</SLabel>
				{endIcon && <SIcon name={endIcon} />}
			</SPrimary>
		</SKey>
	);
};

const validIconNames = [null, 'enter', 'shift'];

Key.propTypes = {
	label: PropTypes.string,
	secondaryLabel: PropTypes.string,
	size: PropTypes.number,
	position: PropTypes.oneOf([
		'top-left',
		'bottom-left',
		'top-right',
		'bottom-right',
		'center',
	]),
	startIcon: PropTypes.oneOf(validIconNames),
	endIcon: PropTypes.oneOf(validIconNames),
	active: PropTypes.bool,
};

export default Key;
