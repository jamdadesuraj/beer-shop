import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css';







import armer from "../images/armer.jpg"
import ar from "../images/ar.jpg"
import Budweiser from "../images/Budweiser.jpg"
import b  from "../images/b.jpg"
import c from "../images/c.jpg"
import d from "../images/d.jpg"
import e from "../images/e.jpg"
import f from "../images/f.jpg"
import g from "../images/g.jpg"
import h from "../images/h.jpg"
import i from "../images/i.jpg"
import j from "../images/j.jpg"




const Slider = () => {
    return (
        <>
        <section className="slide_section">
           <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide className="slider_data grow"> 
      {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={armer} alt="Card image cap" classNameName="img-fluid"/>
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">ARMR ANTI HANGOVER DRINKS</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">100</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>


      <SwiperSlide className="grow">

      {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={e} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">Fosters Lager</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">85</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
      </SwiperSlide>


      <SwiperSlide className="grow">
      {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={j} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">KINGFISHER BLUE</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">75</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
      </SwiperSlide>


             <SwiperSlide className="grow">  
     
             {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={i} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">Indus Pride Citrusy Cardamom</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">125</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>


               <SwiperSlide className="grow"> 
               {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={h} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">Heineken Lager Beer</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">70</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>

             <SwiperSlide className="grow">  
             {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={g} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">Haywards 5000</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">115</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>



                <SwiperSlide className="grow">  
                {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={f} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">Haywards 2000</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">120</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>






                <SwiperSlide className="grow"> 
                {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={d} alt="Card image cap" className="img-fluid"/>
                  
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">CARLSBERG ELEPHANT</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">165</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>








                <SwiperSlide className="grow">  
                {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={c} alt="Card image cap" className="img-fluid"/>
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">Carlsberg All Malt Beer</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign"> 170</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>






                <SwiperSlide className="grow">    
                {/* <div className="col-12 col-md-4 col-lg-4 gy-5 grow"> */}
                {/* <div className="card dish_img" > */}
                <img className="card-img-top" src={b} alt="Card image cap" className="img-fluid"/>
                <div className="card-body">
                    {/* <h5 className="card-title dish_title">Tasty Food</h5> */}
                    <h3 className="dish_name">BUDWEISER PREMIUM</h3>
                {/* <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star dish_icon"></i>
                <i className="fas fa-star-half-alt dish_icon"></i> */}
                <p className="dish_prize"><i class="fas fa-rupee-sign">100</i> <span> <a href="#" className=" dish_btn">Select Options</a></span></p>
             
                </div>
                {/* </div> */}
                {/* </div> */}
                </SwiperSlide>

























    </Swiper> 
    </section>
        </>
    )
}

export default Slider
