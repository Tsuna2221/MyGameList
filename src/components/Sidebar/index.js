import React, { Fragment, useState } from 'react';

const Sidebar = () => {
    const [currentHover, setHover] = useState(null)
    const navItems = [
        { 
            items: [
                { title: "Home", to: "/" }
            ] 
        },
        {
            items: [
                { title: "Most Antecipated", to: "/most-antecipated" },
                { title: "New Releases", to: "/new-releases" },
                { title: "Most Popular", to: "/most-popular" },
                { title: "Upcoming Games", to: "/upcoming" },
            ]
        },
        {
            items: [
                { 
                    title: "Browse", 
                    subitems: [
                        { title: "By Platform", to: "/browse/platforms" },
                        { title: "By Developer", to: "/browse/developers" },
                        { title: "By Publisher", to: "/browse/publishers" },
                        { title: "By Genre", to: "/browse/genres" },
                        { title: "By Tags", to: "/browse/tags" },
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
                        {items.map(({title, subitems, to}, index) => (
                                <Fragment key={index}>
                                    {subitems ? 
                                        <Fragment>
                                            <p className="c-light s-25 w-bold mar-t-8 mar-b-12">{title}</p>
                                            {subitems.map(({title, to}, index) => (
                                                <div key={index} onMouseLeave={() => setHover(null)} onMouseEnter={() => setHover(index)} className="sub-item d-flex flex-end pos-relative cw-fit">
                                                    <a href={to} className="sub-title c-light2 cw-fit s-15 w-bold">{title}</a>
                                                    <div className={`sub-border pos-absolute${currentHover !== null && currentHover !== index ? " hide" : ""}`}/>
                                                </div>
                                            ))}
                                        </Fragment>
                                    :
                                        <a href={to} className="nav-anchor c-light s-25 w-bold mar-v-8">{title}</a>    
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