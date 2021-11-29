import React from 'react'
import carasol_zero from  "../images/c0.jpg"
import carasol_one from "../images/c1.jpg"
import carasol_two from "../images/c2.jpg"
import carasol_three from "../images/c3.jpg"
import carasol_four from "../images/c4.jpg"
import carasol_five from "../images/c5.jpg"




const Carasol = () => {
    return (
        <>
        <section className="carasol_section">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={carasol_zero} alt="First slide"/>
    </div>
    
    <div class="carousel-item">
      <img class="d-block w-100" src={carasol_one} alt="Second slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={carasol_two} alt="Second slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={carasol_three} alt="Second slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={carasol_four} alt="Second slide"/>
    </div>



    <div class="carousel-item">
      <img class="d-block w-100" src={carasol_five} alt="Third slide"/>
    </div>

   

    
  </div>











  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</section>
        </>
    )
}

export default Carasol
