import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function StatusContract(){
return(
    <div>
        <Navbar/><br /> <br /> <br />
   <h2>Contractul a fost înregistrat cu succes!</h2> <br /> <br />
    <h3>Pentru a afla stadiul în care se află contractul tău, verificăţi regulat adresa de email!</h3> <br />
    <p>Pentru nelămuriri, reclamaţii sau întrebări: <strong><a href="mailto:adelamiclea709@yahoo.com" target="_blank">
contactaţi-ne!</a></strong>  </p> <br />
    <Footer/>
    </div>
);
}
export default StatusContract;