import React,{ useEffect } from "react";
import "./HeroStyle.css";
import Navbar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Alert from '../components/Alert'


 const Aplication=()=>{
        const navigate=useNavigate()
    const{name,
    showAlert,
    displayAlert,
    lastName,
    email,
    grade,
    tel,
    address,
    studyYear,
    situation,
    situationOption,
    handleChange,
    cerers,
    date,sign,
    alertType,}=useAppContext()

        useEffect(()=>{
        if(alertType ==='success'){
        setTimeout(()=>{
                navigate('/status')
        },3000)
        }},[alertType,navigate]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !lastName || !email || !address || !tel || !studyYear || !grade || !sign ){
            displayAlert();
            return
        }
        cerers()
        }

        const handleCerereInput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    console.log(`${name}:${value}`);
    handleChange({name,value})
  }
         return(
        <section className="section">
                                <br />
        <div className="title">
        </div>
        <form >
            <p className="cerere">
                CERERE PENTRU ACORDAREA UNUI LOC DE CAZARE ÎN CĂMINELE STUDENŢEŞTI <br />
AN UNIVERSITAR 2023-2024</p>                

<p> <br />
<label htmlFor="name">Nume: </label>
        <input value={name} 
        type="text" 
        placeholder="numele tău"
        name="name" 
        onChange={handleCerereInput}/>

        <br />
<label htmlFor="lastName">Prenume: </label>
        <input value={lastName} 
        type="text" 
        placeholder="prenumele tău" 
        name="lastName" 
        onChange={handleCerereInput}/>
        <br />
<label htmlFor="address">Adresa(strada,numărul,blocul,scara,apartamentul,localitatea,judeţul): </label>
        <input value={address} 
        type="text" 
        placeholder="starda Mălinului,bl 70 scara B, loc Ocna Mureş, jud Alba" 
        name="address" 
        onChange={handleCerereInput}/>
        <br />
<label htmlFor="tel">Număr de telefon: </label>
        <input value={tel} 
        type="number" 
        placeholder="0745822543" 
        name="tel" 
        onChange={handleCerereInput}/>
        <br />
<label htmlFor="email">Email: </label>
        <input value={email} 
        type="email" 
        placeholder="youremail@gmail.com"
        name="email"
        onChange={handleCerereInput} />
        <br />
<label htmlFor="studyYear">Anul de studiu: </label>
        <input value={studyYear} 
        type="text" 
        placeholder="1/2/3" 
        name="studyYear"
        onChange={handleCerereInput} />
        <br />
<label htmlFor="grade">Media din anul precedent de studiu/media admiterii: </label>
        <input value={grade} 
        type="number" 
        placeholder="8.22" 
        name="grade"
        onChange={handleCerereInput} />
        <br />
        <div>
                <label htmlFor="situation">Situaţia: </label>
                <select 
                name="situation" 
                value={situation}
                onChange={handleCerereInput}>
                        {situationOption.map((itemValue,index)=>{
                                return <option key={index} value={itemValue}>
                                        {itemValue}
                                </option>
                        })}
                </select>
        </div>
            </p>
            <p className="cerere">*toate informațiile sunt obligatorii </p>
            <p className="cerere">Alte mențiuni (de exemplu- solicitarea unui loc în cămin pentru caz de boală etc)</p>
            <p className="cerere">Declaratie: Subsemnatul/a vă rog să aprobați acordarea unui loc în căminele sudențesti în anul universitar 2023-2024.
            Declar pe proprie răspundere că datele prezentate în cerere sunt reale și complete. Declar că am luat cunostință de prevederile
            Regulamentului privind acordarea de locuri în căminele studențești pentru studenții din Universitatea Babeș-Bolyai. 
            </p>  
            <div className="data">
            <label htmlFor="date" >Data completării:</label> <br />
<input value={date} type="date" name="date" onChange={handleCerereInput}/></div>
<div className="sign"> 
<label htmlFor="sign" >Semnătură</label>
        <br/>
        <input value={sign} 
        type="text" 
        name="sign"
        placeholder="nume şi prenume"
        onChange={handleCerereInput} />
        <br /> </div><br />        
<br /> <br /> <br /> <br />
             <button type="submit"
             className="button-text" 
             onClick={handleSubmit}>Trimite cererea</button>
                {showAlert && <Alert/>}
        </form>
            <button ><Link to='/contract' className="button-text">Ai fost deja acceptat/ă?</Link></button> <br /> <br /> 

        </section>
    );
    <Navbar/>
}
export default Aplication;