import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SingleCaminContainer from "../components/SingleCaminContainer";
function StatusContract(){
return(
    <div>
        <Navbar/><br /> <br /> <br />
   <h2>Operaţiunea a fost efectuată cu succes!</h2> <br /> <br />
    <h3>Verifică-ţi regulat adresa de e-mail introdu să pentru a putea urmării schimbările!</h3> <br />
    <p>Pentru nelămuriri, reclamaţii sau întrebări: <strong><a href="mailto:adelamiclea709@yahoo.com" target="_blank">
contactaţi-ne!</a></strong>  </p> <br />
<SingleCaminContainer/>
    <Footer/>
    </div>
);
}
export default StatusContract;