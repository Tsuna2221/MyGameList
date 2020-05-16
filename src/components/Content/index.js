import React, { useContext } from 'react';

//Contexts
import { GameListContext } from '../../contexts/GameListContext'

//Data
import { results } from '../../data/games.json'

//Components
import Card from '../ListItem/Card'

const Content = () => {
    const { games, titles } = useContext(GameListContext);
    const path = window.location.pathname;

    return (
        <div className='main-content'>
            <div className="grid-container">
                <div>
                    <h1 className="s-45 w-bold c-light">{titles[path].title}</h1>
                    <div></div>
                </div>
                <div className="cards-container d-flex ">
                    {
                        games.length > 0 ?
                            games.map(game => <Card key={game.id} game={game}/>)
                        :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;