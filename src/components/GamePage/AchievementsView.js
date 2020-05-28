import React from 'react';

import { Button } from '../../shared/Buttons'

const AchievementsView = ({achievements}) => {
    const filteredList = achievements.filter((i, index) => index < 6)
    return (
        <div className='achivement-view mar-t-24'>
            <div className="container">
                <h2 className="s-26 w-bold c-light">Achievements</h2>
                <div className="acv-listing d-flex a-between mar-t-20">
                    {
                        filteredList.map(({id, image}) => (
                            <div className="acv-img-container d-flex a-center overflow-hide" key={id}>
                                <img className="ch-inherit" src={image} alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className="acv-btns d-flex a-between mar-t-24">
                    <Button label="Completed by you" exec={() => null}/>
                    <Button label="View all Achievements" exec={() => null}/>
                </div>
            </div>
        </div>
    )
}

export default AchievementsView;