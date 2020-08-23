import React from 'react';

//Components
import Card from '../ListItem/Card'

const SimilarGames = ({similar}) => {
    return (
        <div className='similar-games pad-b-30'>
            <h2 className="s-26 w-bold c-light mar-b-16">Similar Game</h2>
            <div className="similar-container d-flex overflow-x-scroll pad-b-6">
                {
                    similar.map((game) => <Card fromSimilar={true} videoPreview={true} hideUnderlay={true} key={game.id} game={game}/>)
                }
            </div>
        </div>
    )
}

export default SimilarGames;