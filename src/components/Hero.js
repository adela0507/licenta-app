import React,{ useState,useEffect } from "react";
import "./HeroStyle.css";
import { Link } from "react-router-dom";
import img1 from'../components/img1.jpg';


function Hero(){
    return(
      <section className="section">
        <img src={img1} alt="" className="photo-right1"/> <br /><br /> <br />
   <div className="content1">
    <h3>Caminul, <i>casa</i> ta pentru urmatorul an universitar!</h3>
    <p className="text-home">Pentru mai multe informatii ti-am pus la dispozitie o pagina destinata curiozitatilor pe care toti le au despre cum e viata de camin <Link to='/about' className="special-text-home">ai detali aici</Link> sau daca vrei sa explorezi caminele in care ai putea locui <Link  to='/camine' className="special-text-home">apasa aici</Link>!</p>

     <br />
   </div>
        <button className="button-home"><Link to='/cereri' className="button-text">Vezi caminele</Link></button> 

</section>
    );
}

export default Hero;