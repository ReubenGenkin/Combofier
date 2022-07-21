import React, { useState, useEffect } from "react";
import Header from "./Header";
function Navigation(props) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  let arr = ["Contact", "Resume", "Skills", "Project", "About"];
  function navBar(x) {
    return arr.map((el) => (
      <li className="nav-item">
        <a
          className="nav-link navbar-list"
          onClick={() => props.setLanding(false)}
          href={`#${el}`}
        >
          {el}
        </a>
      </li>
    ));
  }
    return (
      <nav
        className={`navbar  ${
          props.scrolling ? "nav-bar--hidden" : ""
        } navbar-grid`}
      >
        { <button onClick={toggleNav} className={`nav-btn ${screenWidth >481? "nav-toggle-off":""}`}>BTN</button>}
        <div className="container-fluid nav-logo ">
          <a className="navbar-brand " href="#Home">
            {" "}
            <Header scrollPast={props.scrollPast} />{" "}
          </a>
        </div>

        <div className={`nav-content ${(screenWidth <481 && toggleMenu=== false )? "nav-toggle-off": ""}`}>
          <ul className="nav-list-ul">{navBar()}</ul>
        </div>
        
      </nav>
      
    );
      }
    export default Navigation;


 