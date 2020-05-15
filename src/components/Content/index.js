import React from 'react';

//Data
import { results } from '../../data/games.json'

//Components
import Card from '../ListItem/Card'

const Content = () => (
    <div className='main-content'>
        <div className="grid-container">
            <div className="cards-container d-flex ">
                {
                    results.map(game => <Card game={game}/>)
                }
            </div>
        </div>
    </div>
)

export default Content;