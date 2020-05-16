import React, { useState, Fragment } from 'react';

//Assets
import PlayIcon from '../../assets/play-icon.svg'
import PlayStationIcon from '../../assets/playstation.svg'
import SwitchIcon from '../../assets/switch.svg'
import XboxIcon from '../../assets/xbox.svg'
import WindowsIcon from '../../assets/pc.svg'
import MacOSIcon from '../../assets/macos.svg'
import AndroidIcon from '../../assets/android.svg'
import LinuxIcon from '../../assets/linux.svg'

const Card = ({ game: { genres, background_image, image_background, id, metacritic, platforms, releases, tba, name, short_screenshots, clip } }) => {
    const [videoLoadPercentage, setPercentage] = useState(0)
    const [hovering, setHover] = useState(null)
    const bg = background_image ? background_image : image_background;
    const bgImage = bg ? bg.replace("/media/", "/media/crop/600/400/") : ""
    const consoleIcons = {
        "playstation5": PlayStationIcon,
        "playstation4": PlayStationIcon,
        "playstation3": PlayStationIcon,
        "ps-vita": PlayStationIcon,
        "xbox-series-x": XboxIcon,
        "xbox-one": XboxIcon,
        "xbox-old": XboxIcon,
        "xbox360": XboxIcon,
        "nintendo-switch": SwitchIcon,
        "pc": WindowsIcon,
        "macos": MacOSIcon,
        "ios": MacOSIcon,
        "android": AndroidIcon,
        "linux": LinuxIcon,
    }

    return (
        <div key={id} onMouseLeave={() => setTimeout(() => setHover(false), 400)} onMouseEnter={() => setHover(true)} className='card-item mar-4 pos-relative' style={{backgroundImage: `url(${bgImage})`}}>
            {
                clip ?
                    <Fragment>
                        <img src={PlayIcon} alt="Video" className="play-icon pos-absolute"/>
                        <video onProgress={({target: { buffered, duration }}) => setPercentage((buffered.end(0) / duration) * 100)} className={`card-video pos-absolute ${videoLoadPercentage > 95 ? "" : "no-opacity"} ${hovering ? "active" : ""}`} autoPlay controls={false} loop muted src={hovering ? clip.clips["320"] : ""}/>
                    </Fragment>
                :
                    null
            }
            
            <div className="card-title pos-absolute">
                <p className="s-19 w-bold c-light mar-b-12">{name}</p>
                <div className="card-icon-set d-flex a-vertical">
                    {
                        platforms ? 
                            platforms.filter((i, index) => index < 3).map(({platform: {id, name, slug}}) => <img key={id} src={consoleIcons[slug]} alt={`${name} Logo`}/>)
                        :
                            null
                    }
                    {
                        platforms && platforms.length > 3 ?
                            <p className="s-14 w-medium c-light">+{platforms.length - 3}</p>
                        :
                            null
                    }
                </div>
            </div>
            <div className="card-shadow"/>
            <div style={{width: `${videoLoadPercentage}%`}} className={`bottom-progress pos-absolute ${videoLoadPercentage > 95 ? "no-opacity" : ""} ${hovering ? "" : "no-opacity"}`}/>
        </div>
    )
}

export default Card;