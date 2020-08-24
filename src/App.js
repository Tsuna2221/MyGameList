import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./bundle.css"
import "./styles/font-metropolis/stylesheet.css"

//Components
import Header from './components/Header'

//Contexts
import GameListContextProvider from './contexts/GameListContext'
import GamePageContextProvider from './contexts/GamePageContext'

//Page
import Main from './pages/Main'
import GameContent from './pages/GameContent'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact render={(props) => (
					<GamePageContextProvider {...props}>
						<GameContent {...props}/>
					</GamePageContextProvider>
				)} path="/game/:id"/>

					<Route exact render={(props) => (
						<GameListContextProvider {...props}>
							<div className='Main'>
								<Header type="list"/>
								<Main/>
							</div>
						</GameListContextProvider> 
					)} path={["/", "/query", "/home/:path", "/browse/:path", "/browse/:path/:query"]}>
					</Route>
			</Switch>
		</Router>
	);
}

export default App;
