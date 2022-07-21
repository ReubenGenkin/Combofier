import React from 'react';

function Header(props){

    return(
        <div>
            <a href = "#Home" className="header-link">
                
                <span className = {`header-home ${props.scrollPast ? "icon-top-bar": ""}`}></span>
                <span className = {`header-home-text top-bar--hidden icon-transition ${props.scrollPast ? "top-bar--Show": ""}`}>Reuben Genkin</span>
            </a>
        </div>
    )

}

export default Header;