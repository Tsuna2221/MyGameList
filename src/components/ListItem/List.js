import React from 'react';
import { Link } from "react-router-dom";

//Components
import { Button } from '../../shared/Buttons';
import Metascore from '../../shared/Metascore';

//Data
import iconList from "../../data/platform-icons.json"; const { parentIcons } = iconList;


const List = ({ width, game: { genres, parent_platforms, background_image, image_background, slug, id, metacritic, platforms, released, tba, name, short_screenshots, clip } }) => {
    const bg = background_image ? background_image : image_background;
    const bgImage = bg ? bg.replace("/media/", "/media/crop/600/400/") : "";
    const baseHeight = 190, imgMargin = 22;
    const imgContainerHeight = Math.ceil(baseHeight - (imgMargin * 2));
    const imageWidth = Math.ceil((imgContainerHeight / 9) * 16);
    const genreString = genres.map(({name}) => name).join(", ");
        
    return (
        <div key={id} style={{height: baseHeight}} className='list-item d-flex a-vertical mar-b-10'>
            <img style={{width: imageWidth - 20, height: imgContainerHeight, marginLeft: imgMargin}} src={bgImage} alt=""/>
            <div className="list-title cw-inherit mar-h-30">
                <div className="d-flex">
                    {short_screenshots.map(({id, image}) => <div className="screenshot-orb" key={id}/>)}    
                </div> 
                <div className="d-flex a-vertical a-between mar-t-20 mar-b-18">
                    <div className="details-container mar-r-10">
                        <div className="d-flex mar-b-8">
                            <Link to={`/game/${slug}`} style={{maxWidth: (48/100) * width}} className="list-game-name c-light w-bold s-28 mar-0 mar-r-20">{name}</Link>
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
                            </div>
                        </div>
                        <div className="d-flex">
                            <p className="c-shade s-14 mar-r-26">Release Date <span className="c-light s-15">{tba ? "TBA" : released}</span></p>
                            <p className="c-shade s-14">Genres <span className="c-light s-15">{genreString}</span></p>
                        </div>
                    </div>
                    {metacritic ? <Metascore score={metacritic}/> : null}
                </div>
                <div className="d-flex">
                    <Button style={{marginRight: 18}} label="More like this"/>
                    <Button status={true} label="Add to list"/>
                </div>
            </div>
        </div>
    )
}

export default List;