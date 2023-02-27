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
      <h3>Sorry, the page you tried cannot be found</h3>
      <br />
      <button className="btn">
      <Link to='/'>back home</Link>
      </button>
      
    </section>
    <Footer/>
    </div>
  );
};
export default Error;
