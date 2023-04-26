import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../src//context/appContext'
import Alert from './components/Alert'

const initialState={
  name:'',
  email:'',
  password:'',
  isMember:true,
}
export const Login=()=>{

    const navigate=useNavigate();
    const [value,setValue]=useState(initialState);
    const {showAlert,displayAlert,user,loginUser}=useAppContext();
    const [show,setShow]=useState(false);

    const handleShow=()=>{
      setShow(!show)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const{email,name,password,isMember}=value;
        if((!isMember && !name) || !email || !password) 
        {
          displayAlert();
          return;
        }
        const currentUser={name,email,password};
    if(isMember){
        loginUser(currentUser);
    }
    else{
        navigate('/register');
    }
    }

    const handleChange=(e)=>{
      setValue({...value, [e.target.name]: e.target.value})
    };

    useEffect(()=>{
if(user){
    setTimeout(()=>{
    navigate('/')
    },3000)

}
    },[user,navigate]);

    return (
        
        <div className="auth-form-container">
            <h2>Conectare</h2>
       <form action="POST" onSubmit={handleSubmit}>
        <div className="alert-danger">
        {showAlert && <Alert/>}
        </div>
         
          <br />
        <label htmlFor="email">Email</label>
        <br/>
        <input value={value.email} 
        onChange={handleChange} 
        type="email" 
        placeholder="youremail@gmail.com" 
        id="email" 
        name="email" />
        <br/>
        <label htmlFor="password">Parolă</label>
        <br/>
        <input value={value.password} 
        onChange={handleChange} type={show?"text":"password"} placeholder="*******" name="password" id="password" /> 
        <button className="btn" onClick={handleShow}>Show</button>
        <br/>
        <button  type="submit" >Conectează-te!</button>
       </form>
               
       <br/>
       <button className="link-btn" onClick={()=>navigate('/register')}>Nu ai încă un cont? Înregistrează-te acum!</button>
       </div>
    );
};
export default Login;