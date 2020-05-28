import React, { useContext, Fragment } from 'react';

//Contexts
import { GamePageContext } from '../contexts/GamePageContext';

//Components
import GamePageAbout from '../components/Content/GamePageAbout'
import GamePageMedia from '../components/Content/GamePageMedia'
import GamePageBottom from '../components/Content/GamePageBottom'

const GameContent = () => {
    const { game } = useContext(GamePageContext);

    return (
        <Fragment>
            <div className="main-game-bg pos-absolute cw-max-view">
                <div className="overlay-shadow pos-absolute z-index-100"/>
                <img src={game.background_image} className="cw-100"/>
            </div>

            <div className="content game-display pos-absolute cw-fill z-index-100">
                <div className="d-flex a-between">
                    <GamePageAbout game={game}/>
                    <GamePageMedia game={game}/>
                </div>
                <GamePageBottom game={game}/>
            </div>
        </Fragment>
    )
}

export default GameContent;