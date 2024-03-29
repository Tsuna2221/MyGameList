import React, { Fragment, useRef } from 'react';

//Components
import { FullButton } from '../../shared/Buttons';

//Data
import iconList from "../../data/platform-icons.json"; const { parentIcons } = iconList;


const CardUnderlay = ({game}) => {
    const { genres, parent_platforms, metacritic, released, name, short_screenshots } = game;
    const underlay = useRef(null)
    const { scrollHeight } = underlay.current ? underlay.current : {}

    const buttons = [
        {
            label: "More like this",
            func: null,
            style: null,
        },
        {
            label: "Add to List",
            func: null,
            style: null,
        }
    ]
    const lines = [
        { label: "Release Date", name: released },
        { label: "Metascore", name: metacritic },
        { label: "Genres", name: genres?.map(({name, slug}, index) => (
            <Fragment>
                <a className="c-light s-13" href={`./browse/tags/${slug}`}>{`${name}`}</a>
                {index === genres.length - 1 ? "" : ", "}
            </Fragment>
        ))}
    ]

    return (
        <div ref={underlay} style={{maxHeight: scrollHeight }} className="underlay">
            <div className="orb-container d-flex a-center">
                {
                    short_screenshots ? 
                        short_screenshots.map(({id}) => <div className="screenshot-orb card" key={id}/>)
                    :
                        null
                }    
            </div>
            <div className="pad-h-24">
                <div className="d-flex a-between a-vertical">
                    <h2 className="mar-0 s-17 w-medium c-light mar-r-8 font-roboto">{name}</h2>
                    <div className="game-icon-set d-flex">
                        {
                            parent_platforms ? 
                                parent_platforms.filter((i, index) => index < 3).map(({platform: {id, name, slug}}) => {
                                    if(parentIcons.includes(`${slug}.svg`)) return <img key={id} src={require(`../../assets/parent/${slug}.svg`)} alt={`${name} Logo`}/>
                                    return null;
                                })
                            :
                                null
                        }
                    </div>
                </div>

                <ul className="mar-b-10 mar-t-6">
                    { lines.map(({label, name}) => <li className="card-line d-flex a-between c-shade w-regular s-13 font-roboto pad-v-10">{label}<span className="c-light txa-right w-regular s-13 font-roboto">{name}</span></li>) }
                </ul>
            </div>
            <FullButton items={buttons}/>
        </div>
    )
}

export default CardUnderlay;