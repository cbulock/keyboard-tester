import { useState } from 'react';
import styled from 'styled-components';
import ActiveKeysContext from 'context/ActiveKeys';
import Keyboard from 'components/Keyboard';

const SPageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	padding: 1em;
`;

const Index = () => {
	const [activeKeys, setActiveKeys] = useState([]);

	const handleKeyDown = (event) => {
		event.preventDefault();
		if (event.repeat) return;
		setActiveKeys([event.code, ...activeKeys]);
	};

	const handleKeyUp = (event) => {
		event.preventDefault();
		setActiveKeys(activeKeys.filter((key) => key !== event.code));
	};

	return (
		<ActiveKeysContext.Provider value={activeKeys}>
			<SPageWrapper
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
				tabIndex={-1}
			>
				<Keyboard />
			</SPageWrapper>
		</ActiveKeysContext.Provider>
	);
};

export default Index;
