import React from 'react'
import beer from "../images/beers.png"
import b from "../images/w.png"
import collect_one from "../images/collect_one.png"
import collect_two from "../images/collect_two.png"
import collect_three from "../images/collect_three.png"

const Collect = () => {
    return (
        <section className="collect_section">

        <div className="container">
            <div className="row">

            <div className="col-12 col-md-4 col-lg-4">
            <div class="collect_card" >
            <div class="card-body">
                <h5 class="card-title">Best Seller</h5>
                <img src={b} alt="" srcset="" />
                <span class="card_text_collect"> DEWARS WHITE LABEL BLENDED SCOTCH WHISKY-750 ML.</span> <br/><i class="fas fa-rupee-sign">2,470.00</i>
                <hr/>
                <img src={collect_one} alt="" srcset="" />
                <span class="card_text_collect"> Zingobar WHITE LABEL BLENDED SCOTCH WHISKY-750 ML..</span> <i class="fas fa-rupee-sign">2560</i>
                <hr/>
               
            </div>
            </div>
            </div>


            <div className="col-12 col-md-4 col-lg-4">
        <img src={beer} alt="" srcset="" />
            </div>



                <div className="col-12 col-md-4 col-lg-4">
            <div class="collect_card" >
            <div class="card-body">
                <h5 class="card-title">Best Seller</h5>
                <img src={collect_two} alt="" srcset="" />
                <span class="card_text_collect"> ANTIQUITY BLUE ULTRA PREMIUM WHISKY-750 ML...</span> <br/><i class="fas fa-rupee-sign">1350</i>
                <hr/>
                <img src={collect_three} alt="" srcset="" />
                <span class="card_text_collect"> BOMBAY SAPPHIRE DISTILLED LONDON DRY GIN-750 ML..</span> <i class="fas fa-rupee-sign">2970</i>
                <hr/>
               
            </div>
            </div>
            </div>
          


            </div>
        </div>
        </section>
            
        
    )
}

export default Collect
