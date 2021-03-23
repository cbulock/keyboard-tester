// https://keycode.info/ for codes

import { useContext } from 'react';
import styled from 'styled-components';
import KeyboardRow from 'components/KeyboardRow';
import ConfigContext from 'context/ConfigContext';

const SBoard = styled.div`
	padding: 1em;
	width: fit-content;
	background-color: #eee;
	border-radius: 3px;
`;

const Keyboard = () => {
	const { keys } = useContext(ConfigContext);

	return (
		<SBoard>
			{keys.map((row, index) => {
				// eslint-disable-next-line react/no-array-index-key
				return <KeyboardRow key={index} keys={row} />;
			})}
		</SBoard>
	);
};

export default Keyboard;
