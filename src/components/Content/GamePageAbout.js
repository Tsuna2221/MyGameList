import React from 'react';

//Components
import AchievementsView from '../GamePage/AchievementsView'

//Data
import iconList from "../../data/platform-icons.json"; const { parentIcons } = iconList;

const AboutItem = ({margin, item: { label, el, text, collapse, maxWidth }}) => (
    <div style={{marginTop: margin}} className={`game-about-item cw-${maxWidth ? "100" : "75"}`}>
        <h4 className="c-shade w-semi-bold mar-b-4 s-16">{label}</h4>
        {
            el ? 
                el
            :
                <p className={`c-light s-15 lh-high ${collapse ? "" : "ws-pre-wrap"}`}>{text}</p>
        }
    </div>
)

const GamePageAbout = ({game: { name, achievements, parent_platforms, platforms, developers, publishers, description_raw, released, genres }}) => {
    return (
        <div className="game-half-page">
            <div className="game-title">
                <h1 className="c-light s-47 w-bold">{name}</h1>
                <span className="c-shade s-21 w-semi-bold">{developers[0] ? developers[0].name : ""}</span>
                <div className="game-icon-set max mar-t-16">
                    {
                        parent_platforms ? 
                            parent_platforms.filter((i, index) => index < 3).map(({platform: {id, name, slug}}) => {
                                if(parentIcons.includes(`${slug}.svg`)) return <img key={id} src={require(`../../assets/parent/${slug}.svg`)} alt={`${name} Logo`}/>
                                else return null;
                            })
                        :
                            null
                    }
                </div>
            </div>

            <hr className="game-border"/>
            
            <div className="game-about">
                <h2 className="s-26 w-bold c-light">About</h2>
                <AboutItem margin={16} item={{label: "Description", text: description_raw.substr(0, 320) + "...", collapse: true, maxWidth: true}}/>

                <div className="mar-t-16">
                    <AboutItem item={{label: "Release Date", text: released}}/>
                </div>

                <div className="d-flex a-vertical a-between mar-t-16">
                    <AboutItem item={{label: "Developers", text: developers[0].name}}/>
                    <AboutItem item={{label: "Publishers", text: publishers[0].name}}/>
                </div>

                <div className="mar-t-16">
                    <AboutItem item={{label: "Genres", el: genres.map(({name, slug}, index) => (
                        <span className="c-light">
                            <a className="c-light s-15 lh-high underline" href={slug}>{`${name}`}</a>
                            {index === genres.length - 1 ? "" : ", "}
                        </span>
                    ))}}/>
                </div>

                <div className="mar-t-16">
                    <AboutItem item={{label: "Platforms", el: platforms.map(({platform: { name, slug }}, index) => (
                        <span className="c-light">
                            <a className="c-light s-15 lh-high underline" href={slug}>{`${name}`}</a>
                            {index === platforms.length - 1 ? "" : ", "}
                        </span>
                    ))}}/>
                </div>
            </div>
            { achievements.length > 0 ? <AchievementsView achievements={achievements}/> : null }
        </div>
    )
}

export default GamePageAbout;