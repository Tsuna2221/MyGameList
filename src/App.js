import React from 'react';

import "./bundle.css"
import "./styles/font-metropolis/stylesheet.css"

//Contexts
import GameListContextProvider from './contexts/GameListContext'

//Page
import Main from './pages/Main'

function App() {
	return (
		<GameListContextProvider>
			<Main/>
		</GameListContextProvider>
	);
}

export default App;
