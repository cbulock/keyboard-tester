import { useContext } from 'react';
import PropTypes from 'prop-types';
import ConfigContext from 'context/ConfigContext';
import ActiveKeysContext from 'context/ActiveKeys';
import Key from 'components/Key';
import keyDefs from './keyDefs.json';

const KeyByCode = ({ code, size = 1 }) => {
	const { style } = useContext(ConfigContext);
	const activeKeys = useContext(ActiveKeysContext);

	const { label, secondaryLabel, startIcon, endIcon } = keyDefs[code];
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
};

KeyByCode.propTypes = {
	code: PropTypes.string.isRequired,
	size: PropTypes.number,
};

export default KeyByCode;
