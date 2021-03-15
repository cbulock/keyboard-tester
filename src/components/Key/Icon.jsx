/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Shift as ShiftIcon } from '@styled-icons/icomoon';
import { ArrowReturnLeft as EnterIcon } from '@styled-icons/bootstrap';

const Icon = ({ name = null, className }) => {
	switch (name) {
		case 'enter':
			return <EnterIcon className={className} />;
		case 'shift':
			return <ShiftIcon className={className} />;
		default:
			return null;
	}
};

Icon.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
};

export default Icon;
