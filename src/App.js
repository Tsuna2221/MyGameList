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
				<div className='Main'>
					<Route exact render={(props) => (
						<GamePageContextProvider {...props}>
							<Header type="game"/>
							<GameContent {...props}/>
						</GamePageContextProvider>
					)} path="/game/:id"/>

					<Route exact render={(props) => (
						<GameListContextProvider {...props}>
							<Header type="list"/>
							<Main/>
						</GameListContextProvider> 
					)} path={["/", "/query", "/home/:path", "/browse/:path"]}>
					</Route>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
