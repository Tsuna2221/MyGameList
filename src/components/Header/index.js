import React, { Fragment, useState, useEffect } from 'react';
 
const Header = () => {
    const [scrollHeight, setScrollHeight] = useState(0)
    const [query, setQuery] = useState({search: ""})

    const updateScrollHeight = () => setScrollHeight(window.scrollY)
    const updateInput = ({target: { value }}, key) => setQuery({[key]: value})
    const submitSearch = (e) => {
        e.preventDefault();

        const baseUrl = window.location.origin
        const queryString = Object.keys(query).map((i) => `${i}=${query[i]}`).join("&")

        if(query.search !== "" ) return window.location.href = `${baseUrl}/query?${queryString}`
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScrollHeight);
    
        return function cleanup() {
          window.removeEventListener("scroll", updateScrollHeight);
        };
    });

    return (
        <div className={`main-header z-index-200 pos-fixed pad-h-80${scrollHeight > 40 ? " active" : ""}`}>
            <div className="header-container d-flex a-vertical cw-100 a-between">
                <div className="d-flex a-vertical">
                    <span className="logo c-light s-24 mar-r-50">Logo?</span>
                    <form onSubmit={submitSearch} action="">
                        <input onChange={(e) => updateInput(e, "search")} className="search-bar c-light no-border pad-h-18" placeholder="Search for 350,000+ games" type="text"/>
                    </form>
                </div>
    
                <div className="d-flex a-vertical">
                    {
                        true ? //Login Check
                            <Fragment>
                                <a className="c-light pad-h-8 mar-h-6 s-15" href="/login">Log In</a>
                                <a className="c-light pad-h-8 mar-h-6 w-bold s-15" href="/signup">Sign Up</a>
                            </Fragment>
                        :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;