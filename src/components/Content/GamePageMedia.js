import React from 'react';

//Components
import ImageViewer from '../GamePage/ImageViewer'
import AddToList from '../GamePage/AddToList'

const GamePageMedia = ({game}) => {
    return (
        <div className="game-half-page">
            <ImageViewer {...game}/>
            <hr className="game-border"/>
            <AddToList {...game}/>
        </div>
    )
}

export default GamePageMedia;