import React from "react";

export const ButtonSmall = ({icon, func, status, style, requireIcon, size}) => (
    <div style={style} className={`btn small d-flex a-center clickable ${size ? size : ""} ${status ? "active" : ""}`} onClick={func}>
        {
            requireIcon ?
                <img className="btn-icon" src={icon} alt=""/>
            :
                <span className={`mdi mdi-${icon} s-24`}/>
        }
    </div>
)

export const FullButton = ({items, containerStyle}) => (
    <div style={containerStyle} className="full-btn-container d-flex">
        {
            items.map(({label, func, style}) => (
                <button style={{...style, width: `${100 / items.length}%`}} className="btn full no-outline no-border c-light s-13 clickable w-regular" onClick={func}>{label}</button>
            )) 
        }
    </div>
)

export const Button = ({label, exec, status, style, icon, type}) => type === "anchor" ? 
(
    <a style={style} href={exec} className={`btn default d-flex a-vertical cw-fit c-light s-14 w-regular no-border no-outline clickable ${status ? "active" : ""}`}>
        {icon ? <img className="mar-r-12" src={require(`../assets/parent/${icon}.svg`)} alt=""/> : null }
        {label}
    </a>
)
:
(
    <button style={style} onClick={exec} className={`btn default c-light s-14 w-regular no-border no-outline clickable ${status ? "active" : ""}`}>
        {icon ? <img src={require(`../assets/parent/${icon}.svg`)} alt=""/> : null }
        {label}
    </button>
)