import React, { Fragment, useState } from 'react';

const Sidebar = () => {
    const [currentHover, setHover] = useState(null)
    const navItems = [
        { 
            "items": [
                { "title": "Home" }
            ] 
        },
        {
            "items": [
                { "title": "Most Antecipated" },
                { "title": "New Releases" },
                { "title": "Most Popular" },
                { "title": "Upcoming Games" },
            ]
        },
        {
            "items": [
                { 
                    "title": "Browse", 
                    "subitems": [
                        { "title": "By Platform" },
                        { "title": "By Developer" },
                        { "title": "By Publisher" },
                        { "title": "By Genre" },
                        { "title": "By Tags" },
                    ]
                }
            ]
        }
        
    ]

    return (
        <div className='main-sidebar d-flex fdir-column txa-right'>
            <ul>
                {navItems.map(({items}, index) => (
                    <li key={index} className="nav-item mar-v-14 d-flex fdir-column align-end">
                        {items.map(({title, subitems}, index) => (
                                <Fragment key={index}>
                                    {subitems ? 
                                        <Fragment>
                                            <p className="c-light s-25 w-bold mar-t-8 mar-b-12">{title}</p>
                                            {subitems.map(({title}, index) => (
                                                <div key={index} onMouseLeave={() => setHover(null)} onMouseEnter={() => setHover(index)} className="sub-item d-flex flex-end pos-relative cw-fit">
                                                    <a href="#" className="sub-title c-light2 cw-fit s-15 w-bold">{title}</a>
                                                    <div className={`sub-border pos-absolute${currentHover !== null && currentHover !== index ? " hide" : ""}`}/>
                                                </div>
                                            ))}
                                        </Fragment>
                                    :
                                        <a href="#" className="nav-anchor c-light s-25 w-bold mar-v-8">{title}</a>    
                                    }
                                </Fragment>
                            ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;