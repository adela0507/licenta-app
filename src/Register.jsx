import React, {Component,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../src//context/appContext'
import Alert from "./components/Alert";

const initialState={
    name:'',
    email:'',
  password:'',
  isMember:true,

}

export const Register=()=>{

    const navigate=useNavigate();
    const [value,setValue]=useState(initialState);
    const {showAlert,isLoading,displayAlert}=useAppContext();
//     const toggleMember=()=>{
//     setValue({...value, isMember: !value.isMember})
//   }
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    // const [name,setName]=useState('');
    // const[lastname,setLastName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
         const{email,name,password,isMember}=value;
    if(!email || !password || (!isMember && !name)){
    displayAlert();

    return;
    }
    }
    const handleChange=(e)=>{
        setValue({...value, [e.target.name]:e.target.value})
    }

    return (
    <div className="auth-form-container">
       <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {showAlert &&<Alert/>}
        <label for="email">Email</label>
        <br/>
        <input value={value.email}
        onChange={handleChange} 
         type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <br/>
        <label for="password">Password</label>
        <br/>
        <input value={value.password} 
        onChange={handleChange} 
        type="password" placeholder="*******" name="password" id="password" />
        <br/>
        <label for="name">Name</label>
        <br/>
        <input value={value.name} 
        onChange={handleChange} 
        type="text" placeholder='name' name="name" id="name" />
        <br/>
        <br/>
        <button type='submit' className='btn btn-block'>Submit</button>

        {/* <button type="submit" onClick={()=>navigate('/login')}>Register</button> */}
       </form>
       <br/>
       <button className="link-btn"  onClick={()=>navigate('/login')}>Already have an account? Log In here</button>
    </div>  
 
        );
}