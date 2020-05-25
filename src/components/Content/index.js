import React, { useContext, useState, useEffect } from 'react';

//Contexts
import { GameListContext } from '../../contexts/GameListContext'

//Components
import Card from '../ListItem/Card'
import List from '../ListItem/List'
import { ButtonSmall } from '../../shared/Buttons'

const Content = () => {
    const viewIcons = ["view-module", "view-stream"];
    const path = window.location.pathname;

    const { games, titles } = useContext(GameListContext);
    const [viewStyle, setViewStyle] = useState(viewIcons[0]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const margin = 60;
    const sidebarWidth = 330;
    const mainWidth = (windowWidth - (margin * 2)) - sidebarWidth;

    const updateWidth = () => setWindowWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
    
        return function cleanup() {
          window.removeEventListener("resize", updateWidth);
        };
    });

    return (
        <div style={{width: mainWidth}} className='main-content'>
            <div className="grid-container">
                <div className="">
                    <h1 className="s-45 w-bold c-light mar-b-14">{titles[path].title}</h1>
                    <div className="d-flex a-vertical mar-b-26">
                        {viewIcons.map((icon, index) => (
                            <ButtonSmall style={index === viewIcons.length - 1 ? { marginLeft: 10 } : {}} icon={icon} func={() => setViewStyle(icon)} status={viewStyle === icon}/>
                        ))}
                    </div>
                </div>
                <div className="cards-container d-flex">
                    {
                        games.length > 0 ?
                            games.map(game => 
                                viewStyle === "view-module" ? 
                                    <Card key={game.id} game={game}/>
                                :
                                    <List key={game.id} width={mainWidth} game={game}/>
                            )
                        :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;