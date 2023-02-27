import Aplication from "../components/Aplication";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Cereri=({user})=>{
   /* if(!authorized){
        return <redirect to="/login" />;
    }*/
return(
    <div>
     <h1 className="white1">Bine ai venit, {user?.name}!</h1>
<Navbar/>
    <Aplication/>
    <Footer/>

    </div>

);
}
export default Cereri;