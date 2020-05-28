import React, { Fragment } from 'react';

//Components
import SystemRequirements from '../GamePage/Requirements'
import SimilarGames from '../GamePage/SimilarGames'

const GamePageBottom = ({game: { platforms, similar }}) => {

    return (
        <Fragment>
            <hr className="game-border"/>
            <SystemRequirements platforms={platforms}/>
            <hr className="game-border"/>
            <SimilarGames similar={similar}/>
        </Fragment>
    )
}

export default GamePageBottom;