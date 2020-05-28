import React, { useContext, useState, useEffect, Fragment } from 'react';

//Contexts
import { GamePageContext } from '../contexts/GamePageContext';

//Components
import GamePageAbout from '../components/Content/GamePageAbout'
import GamePageMedia from '../components/Content/GamePageMedia'
import GamePageBottom from '../components/Content/GamePageBottom'

const GameContent = () => {
    const { game, loading } = useContext(GamePageContext);
    const [scrollHeight, setScrollHeight] = useState(0)

    const updateScrollHeight = () => setScrollHeight((40 / 100) * window.scrollY)
    
    useEffect(() => {
        window.addEventListener("scroll", updateScrollHeight);
    
        return function cleanup() {
          window.removeEventListener("scroll", updateScrollHeight);
        };
    });

    return (
        <Fragment>
            <div className="main-game-bg pos-absolute cw-max-view">
                <div className="overlay-shadow pos-absolute z-index-100"/>
                { loading ? null : <img src={game.background_image} style={{transform: `translateY(${-200 + scrollHeight}px)`}} className="cw-100"/> }
            </div>

            <div className={`content game-display pos-absolute d-flex a-horizontal cw-fill z-index-100 ${loading ? "inactive" : ""}`}>
                {
                    loading ? null : (
                        <div className="game-container">
                            <div className="d-flex a-between">
                                <GamePageAbout game={game} loading={loading}/>
                                <GamePageMedia game={game} loading={loading}/>
                            </div>
                            <GamePageBottom game={game} loading={loading}/>
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default GameContent;