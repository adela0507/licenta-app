import Aplication from "../components/Aplication";
import Navbar from "../components/Navbar"


const Cereri=({user})=>{
   /* if(!authorized){
        return <redirect to="/login" />;
    }*/
return(
    <>
     <h1>Hello {user?.name}</h1>
<Navbar/>
    <Aplication/>

    </>

);
}
export default Cereri;