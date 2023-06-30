import React, {useState} from "react";
import { Register } from "./Register";
import  {Login}  from "./Login";
import './App.css';
import{Route,Routes} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import {Home,GetAllCereri, About,Cereri,Error,Status,Camine,Contract,StatusContract}from './routes';

function App() {
    const[user,setUser]=useState(null);

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/camine" element={<Camine/>}/>
        <Route path="/getAll" element={<ProtectedRoute user={user}>
          <GetAllCereri user={user}/>
          </ProtectedRoute>}/>
        <Route path="/status" element={<ProtectedRoute user={user}>
          <Status user={user}/>
          </ProtectedRoute>}/>
          <Route path="/statusContract" element={<ProtectedRoute user={user}>
          <StatusContract user={user}/>
          </ProtectedRoute>}/>
        <Route path="/contract" element={
        <ProtectedRoute user={user}>
          <Contract user={user}/>
          </ProtectedRoute>}/>
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
}

export default App;
