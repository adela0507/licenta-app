import React, {useState} from "react";
import { Register } from "./Register";
import  {Login}  from "./Login";
import './App.css';
import styled from 'styled-components'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import{Route,Routes} from "react-router-dom";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Status from "./routes/Status";
// import Error from "./routes/Error";
import ProtectedRoute from "./routes/ProtectedRoute";
import {Home,About,Cereri,Contact,Error,Status,Camine}from './routes';
import SingleCamin from './components/SingleCamin';


function App() {
    const[user,setUser]=useState(null);

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/camine" element={<Camine/>}/>
        <Route path="/camine/:id" element={<SingleCamin/>}/>
        <Route path="/status" element={<Status/>}/>
        <Route path="/login" element={
        <Login setUser={setUser}/>}/>
        <Route path="/cereri" element={
        <ProtectedRoute user={user}>
          <Cereri user={user}/>
          </ProtectedRoute>}
        />
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  );
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
