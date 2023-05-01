import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Error = () => {
  return (
    <div>
    <section className='section'>
      <Navbar/>
      <h2>404</h2>
      <br />
      <h3>Scuze, pagina pe care încerci să o accesezi nu poate fi găsită!</h3>
      <br />
      <button className="btn">
      <Link to='/'>Înapoi</Link>
      </button>
      
    </section>
    <Footer/>
    </div>
  );
};
export default Error;
