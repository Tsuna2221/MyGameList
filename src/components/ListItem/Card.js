import React, { useState, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom'

//Assets
import PlayIcon from '../../assets/play-icon.svg'

//Components
import CardUnderlay from "./CardUnderlay";

//Contexts
import { GamePageContext } from '../../contexts/GamePageContext'
import { GameListContext } from '../../contexts/GameListContext'

//Data
import iconList from "../../data/platform-icons.json"; const { parentIcons } = iconList;


const Card = ({game, hideUnderlay, videoPreview}) => {
    const listContext = useContext(GameListContext)
    const { mainPath } = listContext || {mainPath: ""};
    const context = useContext(GamePageContext)
    const { slug, parent_platforms, background_image, image_background, id, name, clip } = game;
    const [videoLoadPercentage, setPercentage] = useState(0)
    const [hovering, setHover] = useState(null)
    const bg = background_image ? background_image : image_background;
    const bgImage = bg ? bg.replace("/media/", "/media/crop/600/400/") : "";
    const path = mainPath.split(/\//g).slice(1)

    console.log(mainPath)

    return (
        <div key={id} onMouseLeave={() => setTimeout(() => setHover(false), 400)} onMouseEnter={() => setHover(true)} className={`card-item mar-2 pos-relative ${hovering ? "active" : ""}`} style={{backgroundImage: `url(${bgImage})`}}>
            {hideUnderlay ? null : <CardUnderlay game={game}/>}
            {
                clip ?
                    <Fragment>
                        <img src={PlayIcon} alt="Video" className="play-icon pos-absolute"/>
                        {
                            !videoPreview ? null :
                            <video onProgress={({target: { buffered, duration }}) => setPercentage((buffered.end(0) / duration) * 100)} className={`card-video pos-absolute ${videoLoadPercentage > 95 ? "" : "no-opacity"} ${hovering ? "active" : ""}`} autoPlay controls={false} loop muted src={hovering ? clip.clips["320"] : ""}/>
                        }
                    </Fragment>
                :
                    null
            }
            
            <div className="card-title pos-absolute">
                <p className="s-19 w-bold c-light mar-b-12">{name}</p>
                <div className="game-icon-set d-flex a-vertical">
                    {
                        parent_platforms ? 
                            parent_platforms.filter((i, index) => index < 3).map(({platform: {id, name, slug}}) => {
                                if(parentIcons.includes(`${slug}.svg`)) return <img key={id} src={require(`../../assets/parent/${slug}.svg`)} alt={`${name} Logo`}/>
                                else return null;
                            })
                        :
                            null
                    }
                    {
                        parent_platforms && parent_platforms.length > 3 ?
                            <p className="s-14 w-medium c-light">+{parent_platforms.length - 3}</p>
                        :
                            null
                    }
                </div>
            </div>
            {
                path[0] === "browse" && !path[2] ? 
                    <a href={`${mainPath}/${slug}`} className="cw-100 ch-100"><div className="card-shadow"/></a>
                :
                    <Link onClick={context ? context.reRender : null} className="cw-100 ch-100" to={`/game/${slug}`}><div className="card-shadow"/></Link>
            }
            <div style={{width: `${videoLoadPercentage}%`}} className={`bottom-progress pos-absolute ${videoLoadPercentage > 95 ? "no-opacity" : ""} ${hovering ? "" : "no-opacity"}`}/>
        </div>
    )
}

export default Card;