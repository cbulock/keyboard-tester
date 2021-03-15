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

	const rows = Array.from(new Set(keys.map((key) => key.row)));
	return (
		<SBoard>
			{rows.map((row) => {
				const keysByRow = keys
					.filter((key) => key.row === row)
					.sort((a, b) => a.position - b.position);
				return <KeyboardRow key={row} keys={keysByRow} />;
			})}
		</SBoard>
	);
};

export default Keyboard;
