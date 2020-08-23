import React, { useContext } from 'react';

//Contexts
import { GamePageContext } from '../contexts/GamePageContext';

//Components
import GamePageAbout from '../components/Content/GamePageAbout'
import GamePageMedia from '../components/Content/GamePageMedia'
import GamePageBottom from '../components/Content/GamePageBottom'
import Header from '../components/Header'

const GameContent = () => {
    const { game, loading, scrollHeight, setHoverStatus, isHovering } = useContext(GamePageContext);

    return (
        <div className={`Main${isHovering ? " hovering" : ""}`}>
            <Header type="game"/>
            <div className="main-game-bg pos-absolute cw-max-view">
                <div onMouseEnter={() => setHoverStatus(true)} onMouseLeave={() => setHoverStatus(false)} className={`overlay-shadow pos-absolute z-index-100${isHovering ? " hovering" : ""}`}/>
                { loading ? null : <img src={game.background_image} alt="" style={{transform: `translateY(${isHovering ? 0 : -90 + scrollHeight}px)`}} className={`cw-100${isHovering ? " hovering" : ""}`}/> }
            </div>

            <div className={`content game-display pos-absolute d-flex a-horizontal cw-fill ${isHovering ? " hovering" : ""}${loading || isHovering ? " inactive" : ""}`}>
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
            <div className={`hover-container pos-fixed cw-max-view${loading ? " loading" : ""}${isHovering ? " hovering" : ""}`}>
                <div className={`hover-indicator d-flex a-center cw-max-view`}>
                    <div className={`hover-bar`}/>
                </div>
            </div>
        </div>
    )
}

export default GameContent;