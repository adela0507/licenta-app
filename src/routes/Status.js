import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Status=(_id)=>{
return(
    <div>
        <Navbar/><br /> <br /> <br />
   <h2>Cererea a fost înregistrată cu succes!</h2> <br /> <br />
    <h3>Pentru a afla stadiul în care se află cererea ta, verificăţi regulat adresa de email pentru a putea urmării schimbările cererii tale!</h3> <br />
    <p>Pentru nelămuriri, reclamaţii sau întrebări: <strong><a href="mailto:adelamiclea709@yahoo.com" target="_blank">
contactaţi-ne!</a></strong>  </p> <br />
    <Footer/>
    </div>
);
}
export default Status;