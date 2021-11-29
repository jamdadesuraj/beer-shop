import React from 'react'
import cover from "../images/cover.png"

const Home = () => {
    return (
        <>
        <section className="home_section">
            <div className="container-fluid">
               <div className="row">

                  <div className="col-12 col-md-6 col-lg-6">
                        <img src={cover} alt="" srcset="" />
               </div>


                  <div className="col-12 col-md-6 col-lg-6">
                        <div className="home_info">
                          <h1>DISCOVER BRANDS ENJOY YOUR UNIQUEE TASTE</h1>
                          <h3>“The mouth of a perfectly happy man is filled with beer.”.</h3>
                          {/* <i class="fas fa-map-marker-alt"></i> */}
                          <input type="text" className="home_text" placeholder="Enter Delivery Address"/>
                          {/* <i class="fas fa-arrow-right"></i> */}
                        </div>
               </div>



             </div>
             </div>
        


          

        


 </section>
        </>
    )
}

export default Home
