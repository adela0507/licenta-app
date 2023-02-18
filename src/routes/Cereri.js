import Aplication from "../components/Aplication";
import { redirect } from "react-router-dom";
import Navbar from "../components/Navbar"


function Cereri(){
   /* if(!authorized){
        return <redirect to="/login" />;
    }*/
return(
    <>
<Navbar></Navbar>
    <Aplication/>
    </>
);
}
export default Cereri;