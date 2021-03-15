import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Key from 'components/Key';
import Spacer from 'components/Spacer';
import ConfigContext from 'context/ConfigContext';
import ActiveKeysContext from 'context/ActiveKeys';

const SRow = styled.div`
	display: flex;
`;

const KeyboardRow = ({ keys }) => {
	const { style } = useContext(ConfigContext);
	const activeKeys = useContext(ActiveKeysContext);

	return (
		<SRow>
			{keys.map((key) => {
				const {
					code,
					endIcon,
					label,
					secondaryLabel,
					size,
					startIcon,
					type,
				} = key;
				if (type === 'spacer') return <Spacer size={size} />;
				return (
					<Key
						key={code}
						label={label}
						secondaryLabel={secondaryLabel}
						startIcon={startIcon}
						endIcon={endIcon}
						size={size}
						position={style.position}
						active={activeKeys.includes(code)}
					/>
				);
			})}
		</SRow>
	);
};

KeyboardRow.propTypes = {
	keys: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			label: PropTypes.string,
			secondaryLabel: PropTypes.string,
			size: PropTypes.number,
		}),
	).isRequired,
	style: PropTypes.shape({
		position: PropTypes.oneOf([
			'top-left',
			'bottom-left',
			'top-right',
			'bottom-right',
			'center',
		]),
	}),
};

export default KeyboardRow;
