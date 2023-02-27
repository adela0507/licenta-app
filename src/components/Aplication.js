import React,{ useState,useEffect } from "react";
import "./HeroStyle.css";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const Aplication=({user})=>{
    return(
        <section className="section">
        <div className="title">
        </div>
        <form action="" method="get">
            <p className="cerere">
                CERERE PENTRU ACORDAREA UNUI LOC DE CAZARE IN CĂMINELE STUDENŢEŞTI <br />
AN UNIVERSITAR 2023-2024</p>
<p> <br />
<label for="name">Numele tau:</label>
<input type="text" name="name" autofocus required id="name" size="40"/>
<br/>
<label for="prenume">Prenume tau:</label>
<input type="text" name="prenume" autofocus required id="prenume" size="40"/>
<br/>
<label for="adresa">Adresa(strada,numar,bloc,scara,apartament,localitate,judet):</label>
<input type="text" name="adresa" autofocus required id="adresa" size="200"/>
<br/>
<label for="telefon">Nr de telefon:</label>
<input type="number" name="telefon" autofocus required id="telefon" size="40"/>
<br/>
<label for="email">Email Adress</label>
<input type="email" name="email" required id="email" placeholder="enter a valid email"/>
<br />
<label for="an">An de studiu:</label>
<input type="text" name="an" autofocus required id="an" size="40"/>
<br/>
<label for="option">Buget sau taxa?</label>
<select name="please select a drink" id="option">
<option value="o1">Buget</option>
<option value="o2">Taxa</option>
</select>
<br />
<label for="admitere">Media de admitere:</label>
<input type="number" name="admitere" autofocus required id="admitere" size="40"/>
<br/>
<label for="facultate">Student al facultatii:</label>
<input type="text" name="facultate" autofocus required id="facultate" size="40"/>
<br/>
<label for="beneficiar">Beneficiați de loc în cămin in momentul actual de la acea facultate:</label>
<select name="please select a drink" id="option">
<option value="o1">Da</option>
<option value="o2">Nu</option>
<br />
</select><br />
<label for="preferinta">Preferinta 1:</label>
<select name="please select a drink" id="option">
<option value="o1">A3</option>
<option value="o2">A2</option>
<option value="o3">Camin 17 Hasdeu</option>
<option value="o4">Camin 16 Hasdeu</option>
<option value="o5">Camin 14 Hasdeu</option>
<option value="o6">Camin 1 Hasdeu</option>
<option value="o7">Camin 3 Hasdeu</option>
<option value="o8">Camin 2 Hasdeu</option>
<option value="o9">Camin 4 Hasdeu</option>
<option value="o10">Camin 1 Economica</option>
<option value="o11">Camin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 2:</label>
<select name="please select a drink" id="option">
<option value="o1">A3</option>
<option value="o2">A2</option>
<option value="o3">Camin 17 Hasdeu</option>
<option value="o4">Camin 16 Hasdeu</option>
<option value="o5">Camin 14 Hasdeu</option>
<option value="o6">Camin 1 Hasdeu</option>
<option value="o7">Camin 3 Hasdeu</option>
<option value="o8">Camin 2 Hasdeu</option>
<option value="o9">Camin 4 Hasdeu</option>
<option value="o10">Camin 1 Economica</option>
<option value="o11">Camin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 3:</label>
<select name="please select a drink" id="option">
<option value="o1">A3</option>
<option value="o2">A2</option>
<option value="o3">Camin 17 Hasdeu</option>
<option value="o4">Camin 16 Hasdeu</option>
<option value="o5">Camin 14 Hasdeu</option>
<option value="o6">Camin 1 Hasdeu</option>
<option value="o7">Camin 3 Hasdeu</option>
<option value="o8">Camin 2 Hasdeu</option>
<option value="o9">Camin 4 Hasdeu</option>
<option value="o10">Camin 1 Economica</option>
<option value="o11">Camin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 4:</label>
<select name="please select a drink" id="option">
<option value="o1">A3</option>
<option value="o2">A2</option>
<option value="o3">Camin 17 Hasdeu</option>
<option value="o4">Camin 16 Hasdeu</option>
<option value="o5">Camin 14 Hasdeu</option>
<option value="o6">Camin 1 Hasdeu</option>
<option value="o7">Camin 3 Hasdeu</option>
<option value="o8">Camin 2 Hasdeu</option>
<option value="o9">Camin 4 Hasdeu</option>
<option value="o10">Camin 1 Economica</option>
<option value="o11">Camin 2 Economica</option>
</select>
<br />
<label for="preferinta">Preferinta 5:</label>
<select name="please select a drink" id="option">
<option value="o1">A3</option>
<option value="o2">A2</option>
<option value="o3">Camin 17 Hasdeu</option>
<option value="o4">Camin 16 Hasdeu</option>
<option value="o5">Camin 14 Hasdeu</option>
<option value="o6">Camin 1 Hasdeu</option>
<option value="o7">Camin 3 Hasdeu</option>
<option value="o8">Camin 2 Hasdeu</option>
<option value="o9">Camin 4 Hasdeu</option>
<option value="o10">Camin 1 Economica</option>
<option value="o11">Camin 2 Economica</option>
</select>
<br />
<label for="date">Data completarii:</label>
<input type="date" name="date" autofocus required id="date" size="40"/>
<br/>
            </p>
            <p>*toate informațiile sunt obligatorii </p>
            <p>Alte mențiuni (de exemplu- solicitarea unui loc în cămin pentru caz de boală etc)</p>
            <p>Declaratie: Subsemnatul/a vă rog să aprobați acordarea unui loc în căminele sudențesti în anul universitar 2023-2024.
            Declar pe proprie răspundere că datele prezentate în cerere sunt reale și complete. Declar că am luat cunostință de prevederile
            Regulamentului privind acordarea de locuri în căminele studențești pentru studenții din Universitatea Babeș-Bolyai. 
            </p>
            <button type="submit" ><Link to='/status' className="button-text">Trimite</Link></button>
        </form>
        </section>

    );
    <Navbar/>
}

export default Aplication;