import React from 'react'
import Navbar from "./compounents/Navbar";
import Carasol from "./compounents/Carasol";
import Footer from './compounents/Footer';
import Home from './compounents/Home';
import Coustmer from "./compounents/Coustmer"
import Fomiator from "./compounents/Fomiator"
import Special from "./compounents/Special"
import Collect from "./compounents/Collect"
import Slider from "./compounents/Slider"

import Contact from "./compounents/Contact"
import {Route} from "react-router-dom";




const App = () => {
  return (
    <>
   
    <Navbar/>

    <Route exact path="/">

    <Carasol/>
   <Home/>
   <Fomiator/>
   <Special/>
  <Collect/>
  <Slider/>
  <Coustmer/>
  <Contact/>
  <Footer/>

    </Route>

    <Route exact path="/main">
    {/* <Navbar/> */}
    <Fomiator/>
    <Footer/>
    </Route>
    
    
    
    <Route exact path="/contact">
    {/* <Navbar/> */}
   <Contact/>
    <Footer/>
    </Route>
    
  


  
 
 

   
  
    




</>


  )
}

export default App
