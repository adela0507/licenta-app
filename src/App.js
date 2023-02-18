import React, {useState} from "react";
import user from './data-user';
import { Register } from "./Register";
import  {Login}  from "./Login";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import{Route,Routes} from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Cereri from "./routes/Cereri";
import Status from "./routes/Status";




function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/status" element={<Status/>}/>
        <Route path="/cereri" element={<Cereri />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    
    </div>
  )
/*  const [currentForm,setCurrentForm]=useState('login');
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>

      }      
    </div>
  );
  */
}

export default App;
