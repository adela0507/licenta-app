import React,{ useState,useEffect } from "react";
import "./HeroStyle.css";
import "./ExperienceStyle.css";
import img1 from '../images/caminn.jpg';
import { Link } from "react-router-dom";


function Experience(){
    return(
        <section className="section">
        <div className="">
            <h2 className="white">Vrei să trăieşti la maxim experienţa studenţească?</h2>
            <br /> <br /><br /><br />
            <ul>
                <li><a href="#Costuri">Costuri</a></li>
                <li><a href="#Plata">Plata</a></li>
                <li><a href="#Perioadadecazare">Perioada în care poţi fi cazat</a></li>
                <li><a href="#Cumpotiaplica">Cum pot aplica?</a></li>
                <li><a href="#Diverse">Diverse</a></li>

            </ul>
            <br /><br /><br /><br />
            <section className="left">
                <h3 id="Costuri">Costurile pe care le ai de plătit </h3>
                <p>Trebuie plătită doar regia (variază în funcţie de căminul în care vei fi cazat), utilităţile fiind incluse în aceastea.</p>
                <br />
            </section>
            <section className="right">
                <h3 id="Plata">Plata se va face lunar, fizic sau online.</h3>
                <p>Plata fizică poate fi realizată cash sau card,la administraţia căminului de care aparţii.
                    <br /> Plata online, prin transfer bancar trebuie să conţină şi trimiterea dovezii către administratoarea căminului de carea aparţii. 
                    <br /> Aceasta se face odată pe lună, de obicei fiind realizată înainte de data de 28 a lunii respective. </p>
                <br />
            </section>
            <section className="left">
                <h3 id="Perioadadecazare">Perioada în care îţi poţi depune actele.</h3>
                <p>Înainte de începutul anului universitar, vor fi 4 zile în care îţi vei putea depune online cererea, cei care 
                    vor primi un loc într-unul dintre căminele de care dispunem vor avea 3 zile la dispoziţie pentru a-şi completa şi încărca  <Link to='/contract' className="special-text-home">contractul</Link> pe site-ul nostru.
                    <br /> Apoi vor veni să-şi facă cazarea propriu zisă(îşi vor primii legitimaţia,cheile, aşternuturi dacă este necasr şi îşi vor putea aduce lucrurile de care au nevoie) cazurile sociale vor beneficia de cămin şi după această perioadă.</p>
                <br />
            </section>
            <section className="right">
                <h3 id="Cumpotiaplica">Cum pot aplica?</h3>
                <p>Este foarte simplu! În primul rând trebuie să fii student al facultăţii noastre. <br />
                 Ai nevoie de un cont pe platforma noastra.
                 <br /> Apoi poţi completa <Link to='/cereri' className="special-text-home">cererea</Link>. Aceatsa va fi urmata de aşteptarea răspunsului care va apărea în secţiunea <Link to='/status' className="special-text-home">STATUS</Link>. </p>
                <br />
            </section>
             <section className="left">
                                        <img className="photo-right" src={img1} alt="" />
                <h3 id="Diverse">Te-am făcut curios?</h3>
                <p>În cadrul complexului Haşdeu vei beneficia şi de mese calde, oferite de cantina acesteia. <br /> 
              Studenții beneficiază de acces gratuit la internet și săli de lectură. <br />
              În campusuri există posibilitatea ca beneficiarii de cazare să solicite contracost un loc de parcare a autovehiculului. <br />
              În incinta Căminelor 14 Hașdeu, 16 Hașdeu şi Economica II  există spălătorii amenajate unde studenții îți pot duce rufele contracost conform unei programări pe site-ul Calendis. <br />
              La subsolul Căminului 16 Hașdeu studenții pot folosi spațiile destinate activităților de divertisment și aparatura din sălile de fitness(se face pe baya programării). <br />
              În apropierea Căminului 2 Hașdeu s-a amenajat un teatru de vară în care studenții pot organiza diferite activități.</p>
                <br />
            </section>

<br /><br />
            <h5 className="white">  Ce mai aştepţi? Completează acum <Link to='/cereri' className="special-text-home">cererea</Link> pentru a beneficia de un loc într-unul dintre cămine.</h5>

        </div>
        </section>
    );
}


export default Experience;