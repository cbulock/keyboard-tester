import PropTypes from 'prop-types';
import styled from 'styled-components';
import { KEYSIZE } from 'consts';

const SSpacer = styled.div`
	margin: 4px;
	width: ${({ size }) => size * KEYSIZE - 10}px;
	height: ${KEYSIZE - 10}px;
	border: 1px solid rgba(0, 0, 0, 0);
`;

const Spacer = ({ size = 1 }) => <SSpacer size={size} />;

Spacer.propTypes = {
	size: PropTypes.number,
};

export default Spacer;
