import PropTypes from 'prop-types';
import styled from 'styled-components';
import KeyByCode from 'components/KeyByCode';
import Spacer from 'components/Spacer';

const SRow = styled.div`
	display: flex;
`;

const KeyboardRow = ({ keys }) => (
	<SRow>
		{keys.map((key, index) => {
			const { code, size, type } = key;
			// eslint-disable-next-line react/no-array-index-key
			if (type === 'spacer') return <Spacer key={index} size={size} />;
			return <KeyByCode key={code} code={code} size={size} />;
		})}
	</SRow>
);

KeyboardRow.propTypes = {
	keys: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			label: PropTypes.string,
			secondaryLabel: PropTypes.string,
			size: PropTypes.number,
		}),
	).isRequired,
};

export default KeyboardRow;
