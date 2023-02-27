import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export const Login=({setUser})=>{

    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!name||!email) return;
    setUser({ name:name, email:email});
    navigate('/cereri');
    }

    return (
        
        <div className="auth-form-container">
            <h2>Login</h2>
       <form action="POST" onSubmit={handleSubmit}>
         <label for='name' >
            Nume
          </label>
          <br />
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        <label for="email">Email</label>
        <br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <br/>
        <label for="password">Password</label>
        <br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="*******" name="password" id="password" />
        <br/>
        <button type="submit" >
                    Log In
                    </button>
       </form>
               
       <br/>
       <button className="link-btn" onClick={()=>navigate('/register')}>Don't have an account? Register here</button>
       </div>
    );
};
export default Login;