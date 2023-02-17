import React, {useState} from "react";

export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
       <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <br/>
        <label for="password">Password</label>
        <br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="*******" name="password" id="password" />
        <br/>
        <button type="submit">Log In</button>
       </form>
       <br/>
       <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here</button>
       </div>
    );
}