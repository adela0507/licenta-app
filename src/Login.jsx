import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../src//context/appContext'
import Alert from "./components/Alert";


const initialState={
  name:'',
  email:'',
  password:'',
}
export const Login=({setUser})=>{

    const navigate=useNavigate();
    const [value,setValue]=useState(initialState);
    const {showAlert,isLoading,displayAlert}=useAppContext();

    // const [name, setName] = useState('');
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const{email,name,password}=value;
        if(!name || !email || !password) 
        {
          displayAlert()
          return
        }
    setUser({ name:value.name, email:value.email});
    navigate('/cereri');
    }

    const handleChange=(e)=>{
      setValue({...value, [e.target.name]: e.target.value})
      console.log(e.target);
    }

    return (
        
        <div className="auth-form-container">
            <h2>Login</h2>
       <form action="POST" onSubmit={handleSubmit}>
        {showAlert &&<Alert/>}
         <label for='name' >
            Nume
          </label>
          <br />
          <input value={value.name} 
        onChange={handleChange} 
        type="text" placeholder='name' name="name" id="name" />
        
          <br />
        <label for="email">Email</label>
        <br/>
        <input value={value.email} 
        onChange={handleChange} 
        type="email" 
        placeholder="youremail@gmail.com" 
        id="email" 
        name="email" />
        <br/>
        <label for="password">Password</label>
        <br/>
        <input value={value.password} 
        onChange={handleChange} type="password" placeholder="*******" name="password" id="password" />
        <br/>
        <button type="submit" >Log In</button>
       </form>
               
       <br/>
       <button className="link-btn" onClick={()=>navigate('/register')}>Don't have an account? Register here</button>
       </div>
    );
};
export default Login;