import React, {useState} from "react";

export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const[lastname,setLastName]=useState('');

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
        <label for="name">Name</label>
        <br/>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='name' name="name" id="name" />
        <br/>
        <label for="lastname">Last Name</label>
        <br/>
        <input value={lastname} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='lastname' name="lastname" id="lastname" />
        <br/>
        <button type="submit">Register</button>
       </form>
       <br/>
       <button className="link-btn"  onClick={()=>props.onFormSwitch('login')}>Already have an account? Log In here</button>
    </div>  
 
        );
}