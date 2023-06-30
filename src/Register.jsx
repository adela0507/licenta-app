import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../src//context/appContext'
import Alert from "./components/Alert";

const initialState={
    name:'',
    email:'',
  password:'',
  isMember:false,

}

export const Register=()=>{

    const navigate=useNavigate();
    const [value,setValue]=useState(initialState);
    const {showAlert,displayAlert,registerUser,user}=useAppContext();
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
         const{email,name,password,isMember}=value;
    if(!email || !password || (!isMember && !name)){
    displayAlert();
    return;
    }
    const currentUser={name,email,password};
    if(isMember){
        navigate('/login');
    }
    else{
        registerUser(currentUser);
    }
    }
    const handleChange=(e)=>{
        setValue({...value, [e.target.name]:e.target.value})
    };
    
useEffect(()=>{
if(user){
    setTimeout(()=>{
    navigate('/about')
    },3000)

}
    },[user,navigate]);

    return (
    <div className="auth-form-container">
                <h2>Înregistrare</h2>
       <form action="POST" onSubmit={handleSubmit}>
        {showAlert &&<Alert/>}
        <label htmlFor="name">Nume</label>
        <br/>
        <input value={value.name} 
        onChange={handleChange} 
        type="text" placeholder='name' name="name" id="name" />
        <br/>
        <label htmlFor="email">Email</label>
        <br/>
        <input value={value.email}
        onChange={handleChange} 
         type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <br/>
        <label htmlFor="password">Parolă</label>
        <br/>
        <input value={value.password} 
        onChange={handleChange} 
        type={show?"text":"password"} placeholder="*******" name="password" id="password" />
        <button className="btn" onClick={handleShow}>Arată parola</button>

        <br/>
        <br/>
        <button type="submit" >Trimite înregistrarea</button>
       </form>
       <br/>
       <button className="link-btn"  onClick={()=>navigate('/login')}>Ai deja un cont? Conectează-te acum!</button>
    </div>  
 
        );
}