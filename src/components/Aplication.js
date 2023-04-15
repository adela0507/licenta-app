import React,{ useState,useEffect } from "react";
import "./HeroStyle.css";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const Aplication=()=>{
    return(
        <section className="section">
        <div className="title">
        </div>
        <form action="" method="get">
            <p className="cerere">
                CERERE PENTRU ACORDAREA UNUI LOC DE CAZARE ÎN CĂMINELE STUDENŢEŞTI <br />
AN UNIVERSITAR 2023-2024</p>
<p> <br />
<label for="name">Numele tău:</label>
<input type="text" name="name" autofocus required id="name" size="40"/>
<br/>
<label for="prenume">Prenume tău:</label>
<input type="text" name="prenume" autofocus required id="prenume" size="40"/>
<br/>
<label for="adresa">Adresa(strada,numărul,blocul,scara,apartamentul,localitatea,judeţul):</label>
<input type="text" name="adresa" autofocus required id="adresa" size="200"/>
<br/>
<label for="telefon">Nr de telefon:</label>
<input type="number" name="telefon" autofocus required id="telefon" size="40"/>
<br/>
<label for="email">Adresa de email</label>
<input type="email" name="email" required id="email" placeholder="enter a valid email"/>
<br />
<label for="an">An de studiu:</label>
<input type="text" name="an" autofocus required id="an" size="40"/>
<br/>
<label for="option">Buget sau taxă?</label>
<select name="please select a drink" id="option">
<option value="o1">Buget</option>
<option value="o2">Taxă</option>
</select>
<br />
<label for="admitere">Media de admitere:</label>
<input type="number" name="admitere" autofocus required id="admitere" size="40"/>
<br/>
<br />
<label for="preferinta">Preferinţa 1:</label>
<select name="please select a drink" id="option">

<option value="o9">Cămin 17 Haşdeu</option>
<option value="o8">Cămin 16 Haşdeu</option>
<option value="o7">Cămin 14 Haşdeu</option>
<option value="o1">Cămin 1 Haşdeu</option>
<option value="o3">Cămin 3 Haşdeu</option>
<option value="o2">Cămin 2 Haşdeu</option>
<option value="o4">Cămin 4 Haşdeu</option>
<option value="o5">Cămin 1 Economica</option>
<option value="o6">Cămin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 2:</label>
<select name="please select a drink" id="option">
<option value="o9">Cămin 17 Haşdeu</option>
<option value="o8">Cămin 16 Haşdeu</option>
<option value="o7">Cămin 14 Haşdeu</option>
<option value="o1">Cămin 1 Haşdeu</option>
<option value="o3">Cămin 3 Haşdeu</option>
<option value="o2">Cămin 2 Haşdeu</option>
<option value="o4">Cămin 4 Haşdeu</option>
<option value="o5">Cămin 1 Economica</option>
<option value="o6">Cămin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 3:</label>
<select name="please select a drink" id="option">
<option value="o9">Cămin 17 Haşdeu</option>
<option value="o8">Cămin 16 Haşdeu</option>
<option value="o7">Cămin 14 Haşdeu</option>
<option value="o1">Cămin 1 Haşdeu</option>
<option value="o3">Cămin 3 Haşdeu</option>
<option value="o2">Cămin 2 Haşdeu</option>
<option value="o4">Cămin 4 Haşdeu</option>
<option value="o5">Cămin 1 Economica</option>
<option value="o6">Cămin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 4:</label>
<select name="please select a drink" id="option">
<option value="o9">Cămin 17 Haşdeu</option>
<option value="o8">Cămin 16 Haşdeu</option>
<option value="o7">Cămin 14 Haşdeu</option>
<option value="o1">Cămin 1 Haşdeu</option>
<option value="o3">Cămin 3 Haşdeu</option>
<option value="o2">Cămin 2 Haşdeu</option>
<option value="o4">Cămin 4 Haşdeu</option>
<option value="o5">Cămin 1 Economica</option>
<option value="o6">Cămin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 5:</label>
<select name="please select a drink" id="option">
<option value="o9">Cămin 17 Haşdeu</option>
<option value="o8">Cămin 16 Haşdeu</option>
<option value="o7">Cămin 14 Haşdeu</option>
<option value="o1">Cămin 1 Haşdeu</option>
<option value="o2">Cămin 2 Haşdeu</option>
<option value="o3">Cămin 3 Haşdeu</option>
<option value="o4">Cămin 4 Haşdeu</option>
<option value="o5">Cămin 1 Economica</option>
<option value="o6">Cămin 2 Economica</option>
</select>
<br />
<label for="date">Data completării:</label>
<input type="date" name="date" autofocus required id="date" size="40"/>
<br/>
            </p>
            <p className="cerere">*toate informațiile sunt obligatorii </p>
            <p className="cerere">Alte mențiuni (de exemplu- solicitarea unui loc în cămin pentru caz de boală etc)</p>
            <p className="cerere">Declaratie: Subsemnatul/a vă rog să aprobați acordarea unui loc în căminele sudențesti în anul universitar 2023-2024.
            Declar pe proprie răspundere că datele prezentate în cerere sunt reale și complete. Declar că am luat cunostință de prevederile
            Regulamentului privind acordarea de locuri în căminele studențești pentru studenții din Universitatea Babeș-Bolyai. 
            </p> <br /> <br />
            <button type="submit" ><Link to='/status' className="button-text">Trimite</Link></button>
            <br /> <br /> 
            <button  ><Link to='/contract' className="button-text">Ai fost deja acceptat/ă?</Link></button>

        </form>
        <br />

        </section>

    );
    <Navbar/>
}

export default Aplication;