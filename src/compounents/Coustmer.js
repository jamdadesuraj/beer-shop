import React from 'react'
import review_one from "../images/pic-1.png"
import review_two from "../images/pic-2.png"
import review_three from "../images/pic-3.png"

const Review = () => {
    return (
        <>
            <section class="review" id="review">
            <div class="products" id="products">
            <div className="container">
            <div className="shop_head">
                <h1>People  <span className="shop_heading">Love Us</span></h1><hr/>
                </div>
                </div>



<div class="swiper-container review-slider">
<div class="swiper-wrapper">

<div className="container">
<div className="row">

<div className="col-12 col-md-4 col-lg-4">
<div class="swiper-slide">
        <div class="slide">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>“Saucey has literally become a lifestyle changer for me. I’m often way too busy or burnt out after work to want to go back out for booze when I realize my fridge is empty and I need a well earned beer. Enter Saucey.”</p>
            <div class="user">
                <img src={review_one} alt="review img"/>
                <div class="user-info">
                    <h3>john deo</h3>
                    <span>happy customer</span>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="col-12 col-md-4 col-lg-4">
<div class="swiper-slide">
        <div class="slide">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>“Saucey has literally become a lifestyle changer for me. I’m often way too busy or burnt out after work to want to go back out for booze when I realize my fridge is empty and I need a well earned beer. Enter Saucey.”</p>
            <div class="user">
                <img src={review_two} alt="review-img"/>
                <div class="user-info">
                    <h3>mia</h3>
                    <span>happy customer</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="col-12 col-md-4 col-lg-4">
<div class="swiper-slide">
        <div class="slide">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>“Saucey has literally become a lifestyle changer for me. I’m often way too busy or burnt out after work to want to go back out for booze when I realize my fridge is empty and I need a well earned beer. Enter Saucey.”.</p>
            <div class="user">
                <img src={review_three} alt="review img"/>
                <div class="user-info">
                    <h3>smith</h3>
                    <span>happy customer</span>
                </div>
            </div>
        </div>
    </div>
</div>




</div>
</div>  
</div>
</div>
</div>
</section>
        </>
    )
}

export default Review
