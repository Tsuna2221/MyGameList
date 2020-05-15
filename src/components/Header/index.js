import React, { Fragment, useState } from 'react';
 
const Header = () => {
    const [activeHeader, setHeaderState] = useState(false)

    return (
        <div className={`main-header pos-fixed pad-h-80${activeHeader ? " active" : ""}`}>
            <div className="header-container d-flex a-vertical cw-100 a-between">
                <div className="d-flex a-vertical">
                    <span onClick={() => setHeaderState(!activeHeader)} className="logo c-light s-24 mar-r-50">Logo?</span>
                    <input className="search-bar c-light no-border pad-h-18" placeholder="Search for 350,000+ games" type="text"/>
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