import React, { useContext } from 'react';

//Contexts
import { GamePageContext } from '../../contexts/GamePageContext';

const GameMedia = () => {
    const { setHoverStatus, isHovering } = useContext(GamePageContext);

    return (
        <div onMouseEnter={() => setHoverStatus(true)} onMouseLeave={() => setHoverStatus(false)} className={`GameMedia pos-absolute ${isHovering ? "hovering" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="451" height="451" viewBox="0 0 451 451">
                <g data-name="Grupo 41" transform="translate(-1134 -371)">
                    <g id="elipse" data-name="Elipse 27" transform="translate(1134 371)" fill="none" stroke="#fff" stroke-width="28">
                    <circle cx="225.5" cy="225.5" r="225.5" stroke="none"/>
                    <circle cx="225.5" cy="225.5" r="211.5" fill="none"/>
                    </g>
                    <path id="polygon" data-name="Polígono 3" d="M70,0l70,105.9H0Z" transform="translate(1427.271 526.607) rotate(90)" fill="#fff"/>
                </g>
            </svg>
        </div>
    )
}

export default GameMedia;