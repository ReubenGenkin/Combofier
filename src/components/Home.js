import React from 'react';

// origional html for arrow animation
{/* <span className="m_scroll_arrows first"></span>
<span className="m_scroll_arrows second"></span>
<span className="m_scroll_arrows third"></span> */}

// arrow animation generation
let arrowArr =["first", "second", "third"]
    function arrowGen() {

        return (
            arrowArr.map((el)=>(
                <span className={`m_scroll_arrows ${el}`}></span>
          )) 
  )
}

function Home() {

    return (

        <section id="Home">

            <div className=" container-fluid" >
                <div>

                    <div>
                        <span className="icon page-icon"></span>
                    </div>

                    <div>
                        <h1 className=" page-head">Reuben Genkin</h1>
                    </div>
                    <div>
                        <p className="sub-header">Development & Design</p>
                    </div>
                </div>
                <div >
                    <div className="mouse_scroll animation-scroll-wrapper">

                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div>
                           {arrowGen()}
                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default Home;