import React from 'react';

//Components
import ImageViewer from '../GamePage/ImageViewer'

const GamePageMedia = ({game}) => {
    return (
        <div className="game-half-page">
            <ImageViewer {...game}/>
            <hr className="game-border"/>
        </div>
    )
}

export default GamePageMedia;