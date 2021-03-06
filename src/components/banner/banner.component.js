import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'


const Banner = () => (

<div className="container-fluid">
   <div className="col-md-12">
     <img style={{'height':"400px"}}
      className="d-block w-100" src={'assets/restaurant.jpg'}/>

   </div>

   <div className="banner-text ">Top Restaurant Destinations</div>

 </div>


);

export default Banner;