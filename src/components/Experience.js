import React,{ useState,useEffect } from "react";
import "./HeroStyle.css";
import "./ExperienceStyle.css";
import img1 from '../images/caminn.jpg';
import { Link } from "react-router-dom";


function Experience(){
    return(
        <section className="section">
        <div className="">
            <h2 className="white">Vrei sa traiesti la maxim experienta studenteasca?</h2>
            <br /> <br /><br /><br />
            <ul>
                <li><a href="#Costuri">Costuri</a></li>
                <li><a href="#Plata">Plata</a></li>
                <li><a href="#Perioadadecazare">Perioada in care poti fi cazat</a></li>
                <li><a href="#Cumpotiaplica">Cum pot aplica?</a></li>
                <li><a href="#Diverse">Diverse</a></li>

            </ul>
            <br /><br /><br /><br />
            <section className="left">
                <h3 id="Costuri">Costurile pe care le ai de platit pentru a putea fi cazat</h3>
                <p>Trebuie platit doar regia, utilitatile fiind incluse in aceastea.</p>
                <br />
            </section>
            <section className="right">
                <h3 id="Plata">Plata se va face lunar, fizic sau online.</h3>
                <p>plata fizica poate fi realizata cash sau card, cea online prin transfer bancar si trimiterea dovezii catre administratoarea caminului de carea partii</p>
                <br />
            </section>
            <section className="left">
                <h3 id="Perioadadecazare">Perioada in care poti depune actele</h3>
                <p>Inainte de inceputul anului universitar,vor fi 4 zile in care iti vei utea depune online cererile, cei care 
                    vor primi un loc intr-un dintre caminele de care dispunem vor avea 3zile la dispozitie pentru a veni si a-si face cazarea propriu zisa cazurile sociale vor beneficia de camin si dupa aceasta perioada.</p>
                <br />
            </section>
            <section className="right">
                <h3 id="Cumpotiaplica">Cum pot aplica?</h3>
                <p>Este foarte simple! In primul rand trebuie sa fii student al facultatii noastre. Ai nevoie sa de un cont pe platforma noastra. Apoi poti completa cererea atasata. Aceatsa va fi urmata de asteptarea raspunsului care va aparea in sectiunea STATUS</p>
                <br />
            </section>
             <section className="left">
                                        <img className="photo-right" src={img1} alt="" />
                <h3 id="Diverse">Te-am facut curios?</h3>
                <p>In cadrul complexului Hadeu vei beneficia si de mancare calda oferita de cantina acesteia. Vei in apropiere si o sala de sport la care poti merge facandu-ti programare pe gratis. <br />
                Vei avea acces si la 2 spalatorii, fiind repartizat la una din acestea depinzand de caminul din care apartii. <br />
                Ora pana la care e permis sa ai vizite este 23:00, insa nu ai ora de intrat in camin.</p>
                <br />
            </section>

<br /><br />
            <h5 >  Ce mai astepti? Completeaza acum <Link to='/cereri'>cererea</Link> pentru a beneficia de un loc intr-unul dintre camine.</h5>

        </div>
        </section>
    );
}


export default Experience;