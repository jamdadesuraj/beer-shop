import React from 'react'
import {Link} from 'react-router-dom'
import signup from "../images/signup.png"
const Contact = () => {
    return (
        <>
                     <section >
           <div className="container-fluid">
               <div className="outer_div ">
               <div className="inner_div">
                  <h2 className="signup_header">sign up</h2>

                  <div className="row">
                  
  <div className="col-12 col-md-6 col-lg-6">
  <div className="sign_form">   
      
 <form method ="POST">

  <div className="form-group"> 
  <i className="fas fa-user-circle"></i>
    <input type="text" className="form_input" aria-describedby="emailHelp"   placeholder="Enter name" /> 
  </div>
< hr className="form_hr"/>
  <div className="form-group"> 
  <i className="fas fa-envelope"></i>
    <input type="email" className="form_input"  aria-describedby="emailHelp"   placeholder="Enter email"/> 
  </div>
<hr className="form_hr"/>
  <div className="form-group"> 
  <i className="fas fa-phone"></i>
    <input type="text" className="form_input"  aria-describedby="emailHelp"  placeholder="Enter phone"/> 
  </div>
<hr className="form_hr"/>
  <div className="form-group"> 
  <i className="fas fa-user-tie"></i>
    <input type="text" className="form_input"  aria-describedby="emailHelp"  placeholder="Enter Brand"/> 
  </div>
<hr className="form_hr"/>
  <div className="form-group">
  <i className="fas fa-unlock-alt"></i>
    <input type="password" className="form_input"  name="password"   placeholder="Password"/>
  </div>
  <hr className="form_hr"/>

  <div className="form-group">
  <i className="fas fa-unlock-alt"></i>
    <input type="password" className="form_input"   name="cpassword"  placeholder="confirm Password"/>
  </div>
<hr className="form_hr"/>
 
  <button type="submit" className="btn btn-primary btn_form" >Register</button>
</form>

 </div>
</div>



             <div className="col-12 col-md-6 col-lg-6 sign_link">
             
              <img src={signup} alt="signup _img" className="img-fluid" />
              <Link to="/"> <span className="sign_register"> I am already Register</span> </Link>
             </div>


               </div>
               </div>
           </div>
           </div>
          </section>
        </>
    )
}

export default Contact
