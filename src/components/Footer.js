import React from 'react'
import "./HeroStyle.css";

const Footer = () => {
  return <div className='footer'>
    <h5>&copy;<span>UBB </span> <br />

    {new Date().getFullYear()}
    </h5>
    <h5>All rights reserved</h5>
    </div>
};



export default Footer;
