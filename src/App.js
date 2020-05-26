import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./bundle.css"
import "./styles/font-metropolis/stylesheet.css"

//Components
import Header from './components/Header'

//Contexts
import GameListContextProvider from './contexts/GameListContext'

//Page
import Main from './pages/Main'
import GameContent from './pages/GameContent'

function App() {
	return (
		<Router>
			<Switch>
				<GameListContextProvider>
					<div className='Main'>
						<Header/>
						<Route exact component={GameContent} path="/game/:id"/>
						<Route exact component={Main} path={["/", "/query", "/home/:path", "/browse/:path"]}/>
					</div>
				</GameListContextProvider>
			</Switch>
		</Router>
	);
}

export default App;
