import ConfigContext from 'context/ConfigContext';
import Index from 'pages/Index';
import config from 'config.json';

const App = () => (
	<ConfigContext.Provider value={config}>
		<Index />
	</ConfigContext.Provider>
);

export default App;
