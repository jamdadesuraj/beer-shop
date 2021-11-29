import React from 'react'



const Footer = () => {
    return (
        <>
    <section className="footer">

<div className="container box-container">

    <div className="box">
        <h3>locations</h3>
        <a href="#">india</a>
        <a href="#">japan</a>
        <a href="#">russia</a>
        <a href="#">USA</a>
        <a href="#">france</a>
    </div>

    <div className="box">
        <h3>quick links</h3>
        <a href="/">Search</a>
        <a href="/dishes">About Us</a>
        <a href="/about">Terms Of Use</a>
        <a href="/menu">Privacy Policy</a>
     
        <a href="/order">order</a>
    </div>

    <div className="box">
        <h3>contact info</h3>
       
        <a href="#">contact@cheerzClub.in</a>
       
    </div>

    <div className="box_footer">
        <h3>Delivery Details</h3>
        <h2>Timings :10 am - 8.30 pm</h2>
        <h2>Minium Order Value : 1,000 INR</h2>
        
        
       
    </div>

</div>

<div className="credit">  @ 2021, CheerzClub Powered by  <span>Shopify</span> </div>

</section>


        </>
    )
}

export default Footer
