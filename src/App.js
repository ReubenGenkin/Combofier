import React, { useState, useEffect } from 'react';
import Home from './components/Home'
import Navigation from './components/Navigation';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';
import './index.css'
import Landing from './components/Landing';
import './Styles/MainStyles.css';
//import bootstrap from 'bootstrap'

function App(props) {

  //state for project ID
  const [projId, setProjId] = useState(0);

  // state for dynamic rendering
  const [landing, setLanding] = useState(false);

  // State for tracking page axis
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPast, setScrollPast] = useState(false);

  // UseEffect for dynamic navigation bar
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      let topPosition = 200
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);

      } else {
        // upscroll code
        setScrolling(true);

      }
      if (window.pageYOffset > topPosition) {
        setScrollPast(true)
      } else {
        setScrollPast(false)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);

    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, scrollPast]);




  // page rendering between main site and project landing page

  function renderPage() {


    return (
      <div landing={landing} setLanding={setLanding}>
        <Home />
        <About />

        {/* {
          landing ?
            <Landing landing={landing} setLanding={setLanding} projId={projId} setProjId={setProjId} />:
            <Project landing={landing} setLanding={setLanding} projId={projId} setProjId={setProjId} /> 
          } */}


      </div>
    )


  }


  return (

    <main className="main">

      <Navigation scrolling={scrolling} setScrolling={setScrolling} setScrollTop={setScrollTop} scrollPast={scrollPast} landing={landing} setLanding={setLanding}></Navigation>

      {renderPage()}

      <Footer/>

    </main>


  );

}

export default App;
