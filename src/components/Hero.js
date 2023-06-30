import React from "react";
import "./HeroStyle.css";
import { Link } from "react-router-dom";
import img1 from'../components/img1.jpg';
import Review from "./Reviews";


function Hero(){
    return(
      <section className="section">
        <img src={img1} alt="" className="photo-right1"/> <br /><br /> <br />
   <div className="content1">
    <h3>Căminul, <i>casa</i> ta pentru următorul an universitar!</h3>
    <p className="text-home">Pentru mai multe <Link to='/about' className="special-text-home">informaţii</Link> ţi-am pus la dispoziţie o pagină destinată curiozităţilor pe care majoritatea studenţilor le au despre cum e viaţa petrecută în cămin! <br /> Dacă ţi-am stârnit curiozitatea <Link  to='/camine' className="special-text-home">explorează</Link> acum căminele în care vei putea locui!</p>
     <br />
   </div>
        <button className="button-home"><Link to='/cereri' className="button-text">Completează acum cererea!</Link></button> 
<Review/>
        <button className="button-home"><Link to='/getAll' className="button-text">Vezi cererile/contractele</Link></button> 

</section>

    );
}

export default Hero;