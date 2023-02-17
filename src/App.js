import React, {useState} from "react";
import user from './data-user';
import { Register } from "./Register";
import { Login } from "./Login";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return(
    <div className="App">
      <Navbar/>
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
