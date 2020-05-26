import React from "react";

export const ButtonSmall = ({icon, func, status, style}) => (
    <div style={style} className={`btn small d-flex a-center clickable ${status ? "active" : ""}`} onClick={func}>
        <span className={`mdi mdi-${icon} s-24`}/>
    </div>
)

export const Button = ({label, func, status, style}) => (
    <button style={style} className={`btn default c-light s-14 w-regular no-border no-outline clickable ${status ? "active" : ""}`}>{label}</button>
)

export const FullButton = ({items, containerStyle}) => (
    <div style={containerStyle} className="full-btn-container d-flex">
        {
            items.map(({label, func, style}) => (
                <button style={{...style, width: `${100 / items.length}%`}} className="btn full no-border c-light s-13 clickable w-regular" onClick={func}>{label}</button>
            )) 
        }
    </div>
)