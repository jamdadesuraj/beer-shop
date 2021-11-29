import React from 'react'
import {Link} from "react-router-dom"
import logo from "../images/logo.png"



const Navbar = () => {

const openNav =()=>{
  document.getElementById('mysidenav').style.width="250px";
}


const closenav =()=>{
  document.getElementById('mysidenav').style.width="0";
}

    return (
        <>
           

           <section className="navbar_section">
               <div className="container-fluid">
                   <div className="row">


                   <nav className="navbar navbar-expand-lg navbar_logo">
  <Link className="navbar-brand logo" to="#"><img src={logo} alt="" srcset="" /></Link>
  <form class="form-inline ">
      <input class="form-control  " type="search" placeholder="Search"   aria-label="Search" /><i class="fas fa-search"></i>
     
    </form>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse navbar_button" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
    

      

      <div className="sidenav" id="mysidenav">
      <Link to="/" className="closebtn" onClick={closenav} ><i class="fas fa-times"></i></Link>
      <Link to="/"><i class="fas fa-home"></i>Home</Link>
      <Link to="/main"><i class="fas fa-wine-bottle"></i>Main</Link>
      <Link to="#"><i class="fas fa-user-tag"></i>About Us</Link>
      <Link to="/contact"><i class="fas fa-phone-alt"></i>Contact Us</Link>
      <Link to="#"><i class="fas fa-wifi"></i>Collection</Link>
      {/* <Link to="#"><i class="fas fa-heart"></i>Review</Link> */}
      </div>


      <div className="icons">
      <Link to="#" className="fas fa-bars" id="search-icon" onClick={openNav}></Link>
        {/* <Link to="#" className="fas fa-search" id="search-icon"></Link> */}
        <Link to="#" className="fas fa-heart"></Link>
        <Link to="#" className="fas fa-shopping-cart"></Link>
       

    </div>
    </ul>
  
  </div>
</nav>

                   </div>
               </div>
           </section>





        </>
    )
}


export default Navbar
