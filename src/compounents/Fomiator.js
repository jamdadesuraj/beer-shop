import React from 'react'
import main from "../images/w.png";

const Main = () => {
    return (
        <>
            <section className="main_section">
                <div className="container">
                 <div className="row">
                 {/* ------------------------------------------------------------------------------------------------------------ */}
                    <div className="col-12 col-md-4 col-lg-4">
                    <img src={main} alt="" srcset="" />
                    </div>

                 {/* ------------------------------------------------------------------------------------------------------------ */}



                    <div className="col-12 col-md-8 col-lg-8">
                    <div className="main_info">
                    <h1>FOAMINATOR 10</h1>
                    </div>
                    <div class="main_card" >
                    
                            <h4>A beer bottle is a bottle designed as a container for beer. Such designs vary greatly in size and shape, but the glass commonly is brown or green to reduce spoilage from light, especially ultraviolet</h4>
                            <hr/>
                            <h1>ABU :   IBU:   OG:  SIZE:  AVALIABLE:</h1>
                            <h2>5.8%  56  1.07  155  Full </h2>
                            <hr/>
                        <h1>GLASS / TASTING & PARINGS:</h1>
                        <hr/>
                        <i class="fas fa-wine-glass-alt"><span className="main_span">The most widely established alternatives to glass containers for beer in retail sales are beverage cans and aluminium bottles; for larger volumes kegs are in common use.</span></i>
                        
                        
                    </div>
                     </div>


 {/* --------------------------------second part---------------------------------------------------- */}
 <div className="container-fluid">
 <div className="row">
 <div className="col-12 col-md-8 col-lg-8">
                    <div className="main_info_second">
                    <h1>WENDIGO CRAFT</h1>
                    </div>
                    <div class="main_card_second" >
                    
                            <h4>A beer bottle is a bottle designed as a container for beer. Such designs vary greatly in size and shape, but the glass commonly is brown or green to reduce spoilage from light, especially ultraviolet</h4>
                            <hr/>
                            <h1>ABU :   IBU:   OG:  SIZE:  AVALIABLE:</h1>
                            <h2>5.8%  56  1.07  155  Full </h2>
                            <hr/>
                        <h1>GLASS / TASTING & PARINGS:</h1>
                        <hr/>
                        <i class="fas fa-wine-glass-alt"><span className="main_span">The most widely established alternatives to glass containers for beer in retail sales are beverage cans and aluminium bottles; for larger volumes kegs are in common use.</span></i>
                        
                        
                    </div>
                     </div>


{/* ------------------------------------------------------------------------------------------------------------------------ */}

                     <div className="col-12 col-md-4 col-lg-4">
                    <img src={main} alt="" srcset="" />
                    </div>

{/* -------------------------------------------------------------------------------------------------------------------------------- */}
</div>
</div>









                 </div>
                </div>
            </section>
        </>
    )
}

export default Main
