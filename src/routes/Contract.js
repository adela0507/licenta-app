import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Alert from '../components/Alert'
import { useEffect } from "react";

function Contract(){
    const navigate=useNavigate()
    const {nameContract,
        dadName,
        momName,
        school,
        studyYearContract,
        addressContract,
        ci,
        numberCI,
        ciAddress,
        dateContract,
        cnpContract,
        telContract,
        emailContract,
        taxe,
        dateF,
        dateI,
        student,
        studentOption,
        signContract,
        caminNumber,
        caminAddress,
        contracts,
        displayAlert,
        handleChange,
        showAlert,
        alertType,
    }=useAppContext();

    useEffect(()=>{
        if(alertType ==='success'){
        setTimeout(()=>{
                navigate('/statusContract')
        },3000)
}},[alertType,navigate]);

const handleSubmit=(e)=>{
    e.preventDefault();
    if( !nameContract || !dadName || !momName || !school
    || !studyYearContract || !addressContract || !ci
    || !numberCI || !ciAddress  || !cnpContract 
    || !signContract || !dateI || !dateF
     || !telContract || !caminAddress || !caminNumber
     || !emailContract || !taxe  || !dateContract || !student){
        displayAlert();
        return;
     }
     contracts();
}
const handleContractInput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    console.log(`${name}:${value}`);
    handleChange({name,value})
  }
return(
    <div>
    <Navbar/>
    <section className="section">
        <div className="title">
        </div>
        <form action="POST" >

            <h3 className="cerere">
                CONTRACT DE ÎNCHIRIERE
            </h3>
            <br />
            <p className="cerere">

            </p>
            <h4 className="cerere">Art. I. PĂRŢILE CONTRACTANTE</h4>
            <div className="cerere">
            <p>1.1. Universitatea Babeş-Bolyai, cu sediul în Clui-Napoca 400084, str. Mihail Kogălniceanu
                 nr. 1 reprezentată prin Rector Prof.univ.dr. Daniel David,
                 în calitate de proprietar şi <br /> 1.21
            <label htmlFor="name"></label>
            <input  value={nameContract}
            type="text" 
            name="nameContract" 
            onChange={handleContractInput}
            /> 
                fiul (fica) lui
            <label htmlFor="dadName"></label>
            <input value={dadName}
             type="text" 
             name="dadName"
             placeholder="numele tatalui"
            onChange={handleContractInput}           
              /> 
                şi a 
            <label htmlFor="momName"></label>
            <input value={momName}
             type="text"
             name="momName"
              placeholder="numele mamei"
            onChange={handleContractInput}
               /> 

                student(ă) la 
            <label htmlFor="school"></label>
            <input value={school}
            type="text" 
            name="school"
            placeholder="FSEGA"
            onChange={handleContractInput}
            /> 

              anul 
            <label htmlFor="studyYearContract"></label>
            <input value={studyYearContract}
             type="number"
             name="studyYearContract"
             placeholder="anul de studiu in care esti"
            onChange={handleContractInput}
 /> 
 
  , cu domiciliul 
             <label htmlFor="addressContract"></label>
            <input value={addressContract}
             type="text" 
             name="addressContract"
             placeholder="adresa completa,jub,oras,str,nr" 
             onChange={handleContractInput}
/> 
 , posesor al BI/CI seria
            <label htmlFor="ci"></label>
            <input value={ci}
            type="text"
            name="ci"
            placeholder="de ex AX" 
            onChange={handleContractInput}
/> 
  nr. 
            <label htmlFor="numberCI"></label>
            <input value={numberCI}
             type="numar"
             name="numberCI"
              placeholder="515700" 
             onChange={handleContractInput}
/> 
eliberat de 
            <label htmlFor="ciAddress"></label>
            <input value={ciAddress}
            type="text" 
            name="ciAddress"
            placeholder="unde a fost eliberat" 
             onChange={handleContractInput}
/> 
                 la data de 
            <label htmlFor="dateContarct"></label>
            <input value={dateContract}
            type="date" 
            name="dateContract"
            placeholder="" 
             onChange={handleContractInput}
/>
             , CNP 
             <label htmlFor="cnpContract"></label>
            <input value={cnpContract}
            type="number"
            name="cnpContract"
             placeholder="" 
            onChange={handleContractInput}
/> 
            telefon 
            <label htmlFor="telContract"></label>
            <input value={telContract}
             type="number" 
             name="telContract"
             placeholder="nr tau de telefon" 
            onChange={handleContractInput}
/> 
email 
             <label htmlFor="email"></label>
            <input  value={emailContract}
            type="email" 
            name="emailContract"
            placeholder="emailul tau"
             onChange={handleContractInput}
/> 
chiriaş.  <br />  <br />
1.2.1 Categoria studentului cazat în funcţie de subvenţia de cămin <br />
<div>
                <label htmlFor="student">Situatie</label>
                <select 
                name="student" 
                value={student}
                onChange={handleContractInput}>
                        {studentOption.map((itemValue,index)=>{
                                return <option key={index} value={itemValue}>
                                        {itemValue}
                                </option>
                        })}
                </select>
        </div>
<br />
<strong> Art. 2. Obiectivul Contractului</strong> <br />
<p>2.1 Obiectul contractului îl constituie închirierea, pe parcursul anului universitar, a unui loc în căminul <input type="text" name="caminNumber" id="caminNumber" placeholder="in ce camin ai fost repartizta?" value={caminNumber} onChange={handleContractInput}/>
,situat la adresa Cluj Napoca, str. <input type="text" placeholder="adresa completa" name="caminAddress" value={caminAddress} onChange={handleContractInput}/>,
 a instalaţiilor şi spaţiilor 
comune aferente, a bunurilor înregistrate în inventar, proprietate a Universităţii Babeş-Bolyai, conform procesului-verbal de predare-primire întocmit la cazare şi a celorlalte anexe ale prezentului
contract. Pentru eficientizarea spaţiilor de cazare în timpul anului universitar, chiriaşul poate fi mutat în altă cameră a aceluiaşi cămin. </p>
<br /> <br />
<p> <strong>Art. 3. TERMENUL CONTRACTULUI </strong> <br />
3.1. Termenul de închiriere este de la <input value={dateI} name="dateI" type="date" onChange={handleContractInput} />  până la <input value={dateF} name="dateF" type="date" onChange={handleContractInput} /> conform structurii anului universitar.

<br /> <br />

<strong>Art. 4. VALOAREA CONTRACTULUI</strong> <br />
4.1. Tariful de cazare/loc/luna este de <input value={taxe} name="taxe" type="number" onChange={handleContractInput} /> lei. <br />
4.2. Plata chiriei se va face lunar, în avans, pentru luna următoare, până cel târziu în ultima zi lucrătoare a lunii în curs.
 În măsură în care într-o luna, folosință de către chiriaș a locului de cazare este pentru o perioada de 15 zile sau mai puțin, 
 acesta va achita 50% din tariful integral de cazare afferent unei luni, iar în cazul in care folosință locului de cazare este 
 pentru maim ulț de 15 zile, chiriașul achita tariful integral tariful de cazare pentru o luna. <br />
4.3. În cazul depășirii termenului scadent de plata, proprietarul va percepe penalități de 0,05% pentru fiecare zi de întârziere.
 După 30 de zile de depășire a termenului de plata a chiriei, chiriașul va fi exclus din cămin și se vor recupera sumele datorate. <br />
4.4. Proprietarul nu percepe fond de cămin și taxe de întreținere a rețelei de internet.
<br />
 <br />
<strong> Art. 5. DREPTURILE SI OBLIGATIILE PARTILOR CONTRACTANTE</strong> <br />
<strong>5.1. Proprietarul are următoarele drepturi și obligații:</strong> <br />
<strong>DREPTURI:</strong> <br />
5.1.1. Să verifice modul în care chiriașul folosește și întreține camera închiriată,
 inventarul dat spre folosina și spatile comune ale câminului. <br />
5.1.2. Să recupereze imediat pagubă, la dată constatării lipsurilor și deteriorărilor 
produse bunurilor din camera și din spatile comune, prin încasarea contravalorii lor și a manoperei de instalare. <br />
5.1.3. Să încaseze lunar contravaloarea chiriei, să elibereze legitimația de câmin și să o vizeze lunar,
 să pună la dispoziție toate documentele necesare obținerii vizei de flotant pe durata contractului. <br />
5.1.4. Să someze, prin intermediul portarului, locatarul care are vizitatori că aceștia să părăsească căminul la ora 23.00. <br />
<strong>OBLIGAȚII: </strong> <br />
5.1.5. Să predea camera cu dotările aferente, specificate în procesul verbal de 
predare-primire, în stare corespunzătoare folosinței pentru destinația de locuința. <br />
5.1.6. Să asigure condiții normale de viață și de studiu în spațiul oferit. <br />
5.1.7. Să asigure permanent curățenia în spațiile de folosință comună ale 
căminului (holuri, oficii, săli de lectură, scări, grupuri sanitare comune) și în spațiile aferente căminului. <br />
5.1.8. Să asigure execuția lucarilor de întreținere și reparații necesare pentru utilizarea spațiilor de folosință comună ale căminului. <br />
5.1.9. Să asigure pază în cămin prin personalul special angajat, dotările necesare
 pentru respectarea normelor igienico-sanitare și a normelor de siguranță împotriva incendiilor. <br />
5.1.10. Să asigure, săptămânal, schimbarea lenjeriei de pat. <br />

<strong>5.2. Chiriașul are următoarele drepturi și obligații: </strong> <br />
<strong>DREPTURI:</strong><br />
5.2.1. Să preia camera cu dotările aferente specificate în contract în stare
 corespunzătoare folosinței pentru locuit, pe baza de proces-verbal de predare-primire. <br />
5.2.2. Și folosească bunurile din inventarul căminului, instalațiile electrice și sanitare puse la dispoziție. <br />
5.2.3 Să lipească afișe și anunțuri în locuri special amenajate (aviziere), doar după obținerea 
 aprobării Direcției Generale Administrative a U.B.B. <br />
5.2.4. Să locuiască în camera repartizată. <br />
5.2.5. Să primească vizitatori în timpul programului de vizită. <br />
<strong>OBLIGAȚII:</strong> <br />
5.2.6. Să achite integral și la termen chiria pentru locul ocupat în cămin. <br />
5.2.7. Să achite chirie și pe perioada participării, prin acorduri ale Universității,
 la schimburi internațional și mobilități studențești, dacă nu eliberează camera. <br />
5.2.8. Să folosească în mod corespunzător bunurile din inventarul căminului, 
instalațiile electrice și sanitare puse la dispoziție, iar la încetarea contractului, 
să le restituie în starea consemnată în procesul – verbal de predare – primire individual și colectiv de la dată încheierii contractului. <br />
5.2.9. Să răspundă patrimonial de lipsurile și deteriorările produse bunurilor din
 camera și din spațiile de folosință comună. Pagubele materiale se vor suportă direct de către persoanele identificate. <br />
5.2.10. Să nu efectueze nici o modificare a camerei, a instalațiilor aferente, a spațiilor 
de folosință comună și să nu schimbe folosință acestora în alte scopuri decât cele de spațiu de locuit. <br />
5.2.11. Să nu folosească camera, spațiile de folosință comună sau incinta complexului studențesc pentru activități comerciale. <br />
5.2.12. Să nu subinchirieze camera și să nu instrineze locul de cazare. <br />
5.2.13. Să declare locurile rămase libere în camera. <br />
5.2.14. Să anunțe administrația căminului în cazul renunțării la locul de cazare în cămin,
 nu mai târziu de 15 zile înaintea plecării din camera/cămin. <br />
5.2.15. Să respecte nomele de acces în cămin, normele igienico-sanitare și cele de prevenire și stingere a incendiilor. <br />
5.2.16. La folosirea liftului (în câminele unde există), are obligația de a respectă cu strictețe 
instrucțiunile de utilizare afișate în cabina liftului. <br />
5.2.17. Să asigure ordinea și curățenia în camera, să nu arunce pe fereastră și să nu depoziteze 
în spațiile comune ale căminului gunoiul menajer, fiecare locatar urmând să ducă resturile menajere la 
ghena de gunoi amenajată în exteriorul căminului. <br />
5.2.18. Să nu păstreze pe pervazul geamului sau pe suporți obiecte personale sau alimente. br 
5.2.19. Să adopte o ținută și un comportament civilizat, să respecte normele morale și de 
etică universitară, să colaboreze cu comitetul de cămin și să ia atitudine față de actele de indisciplina savârsite în cămin. <br />
5.2.20. Să păstreze liniștea și ordinea publică, să nu organizeze petreceri, întruniri etc. în camera și în spațiile comune ale căminului. <br /> Să nu introducă și să nu consume băuturi alcoolice, droguri sau substanțe cu efect psihotrop în perimetrul complexului studențesc sau în incinta căminului.
5.2.21. Să anunțe administrația și să consemneze în registral special defecțiunile apârute, în vederea remedierii lor. <br />
5.2.22. Să nu foloscasca aparate sau alte instalații electrice de încălzire sau de gătit 
(calorifere, radiatoare, reșouri, grătare, etc.) în spatile de locuit. <br />
5.2.23. Să nu introducă și să nu crească animale în cămin. <br />
5.2.24. Să nu practice jocuri de noroc în cămin. <br />
5.2.25. Să se legitimeze și să permită accesul persoanelor autorizate din
 partea Universității să exercite controlul în cămin, în vederca constatării
  modului de respectare a contractului; a organelor de poliție și personalului de pază. <br />
5.2.26. Să respecte programul de vizită în cămin, până la orele 23.00.  
În cazul în care vizitatorul nu părăsește căminul pâna la ora 23.00, locatarul care a 
primit vizitatorul va fi sancționat conform Regulamentului privind organizarea și funcționarea câminelor studențești. <br />
5.2.27. Să utilizeze cheia camerei în care a fost repartizat numai pe durata de 
valabilitate a contractului de închiriere, după care o va restitui administratorului 
la plecarea din camera/cămin. În cazul în care nu o va restitui, va achita o suma între 10 
și 50 de lei în funcție de costurile aferente fiecărui tip de ușa. Înlocuirea încuietorii la 
ușa camerei se face doar cu aprobarea administratorului, căruia i se va înmâna o cheie. <br />
5.2.28. Să respecte regulamentul de organizare și utilizare a rețelei de comunicații (internet, TV cablu). <br />
5.2.29. Să respecte regulamentul de organizare și funcționare a spalatoriilor amenajate pentru studenți. <br />
5.2.30. Să respecte regulamentul de ordine interioară a căminelor. <br />
5.2.31. Să respecte regulamentul-cadru de cazare și orice alte reglementări legale și interne aplicabile. <br />
<br />


<strong>Art. 6. RĂSPUNDEREA CONTRACTUALĂ</strong> <br />

6.1. În cazul nerespectării obligațiilor contractalui din partea chiriașului, acesta va fi sancționat, după gravitatea faptelor, astfel: <br />
a) mustrare verbală; <br />
b) avertisment scris; <br />
c) excluderea din câmin pe o perioada de la un semestru pâna la un an; <br />
d) pierderca definitivă a dreptului de cazare pe durata studiilor. <br />
6.2. Sancțiunile prevăzute la punctul anterior se dispun în confomitate cu 
competențele, condițiile și termenele prevăzute de art. 44-46 din Regulamentul de organizare și funcționare a căminelor. <br />
6.3. Studenții care își înstrăinează locul de cazare sau folosesc buletinul/cartea de identitate 
proprie pentru a caza alte persoane, vor fi excluși din cămin și pied automat dreptul de cazare pe toată perioada studiilor. <br />
6.4. Cheltuielile de remediere a deteriorarilor aduse câminului și inventarului cuprins în 
procesul-verbal de predare-primire individual și respectiv colectiv vor fi suportate direct de
 către persoanele identificate că responsabile, iar în cazul nerespectării obligației de
  reparare a prejudiciului chiriasal va fi evacuat. <br />
6.5. Administratorul de cămin va avea o evidență exactă a studenților sancționați. <br />
6.6. Contractul nu poate fi utilizat pentru obținerea domiciliului stabil în Cluj-Napoca. <br />
<br />


<strong>Art. 7. DISPOZIȚII FINALE</strong> <br />
7.1. La expirarea termenului contractual, chiriașul are obligația predării camerei și a bunurilor
 primite în baza procesului verbal, în starea în care le-a primit. <br />
7.2. În fișa de lichidare a studenților din ani terminali/studenților care sunt exmatriculati/studenților
 care se retrag de la studii (nivel de studiu licență, master și doctorat) se vor consemna toate debitele
  neachitate reprezentând orice fel de taxa generată de șederea acestora în căminele studențești, precum
   și contravaloarea daunelor produse și neachitate de aceștia. <br />
7.3. În funcție de evoluția virusului SARS-CoV-2 și de orice alte contrângeri faptice sau normative
 rezultate din această pandemie, proprietarul își rezervă dreptul de a schimbă unilateral obiectul 
 închirierii și dreptul de a denunță unilateral contractul. <br />
7.6. Contractul de închiriere conține <strong>1</strong> anexe, că parte integrantã din acesta. Anexele pot fi completate/modificate pe parcursul duratei închirierii, în funcție de modificârile termenilor contractuali.
 <br />
Prezentul contract s-a încheiat în conformitate și se completează cu prevederile legale și interne în vigoare, cu precădere: Legea educație naționale nr. 1/2011, Legea nr. 287/2009 privind Codul civil, Regulamentul de 
cazare în căminele studențești aprobat de Senatul Universității Babeș- Bolyai, Hotarârea Senatului Universității 
Babeș-Bolyai referitoare la taxele și tarifele de închiriere, Ordonanță nr. 97/2005 privind evidență, domiciliul, 
reședința și actele de identitate ale cetățenilor români, Legea nr. 349/2002 pentru prevenirea și combaterea efectelor 
consumului produselor din tutu, Legea 448/2006 privind protecția și promovarea drepturilor persoanelor cu handicap, Legea nr. 307/2006 privind apărarea împotriva incendiilor.
<br />


</p>
</p> <br /> <br /> 
<p className="cerere1">
<h3> NORME DE SECURITATE ȘI SĂNĂTATE ÎN MUNCA ÎN CĂMINELE STUDENȚEȘTI DIN UNIVERSITATEA BABEȘ-BOLYAI</h3>

Fiecare locatar are îndatorirea să-și desfășoare activitatea în așa fel încât să nu expună nicio altă persoană la pericol de accidentare sau îmbolnăvire. Locatarii au obligația de a anunța, administrația câminului studențesc și/sau Comitetul de Administrare al Căminului, despre apariția unui pericol iminent de producere a unui accident sau îmbolnăvire precum și accidentele produse. Locatarii au obligația să respecte normele de acces în cămin, normele de sănătate și securitate în muncă, normele de prevenire și stingere a incendilor, normele de protecia mediului, regulile sanitare și de medicină preventivă, în mod special următoarele: <br />
<strong> <br />
1. să păstreze curățenia în toate spațiile căminului, să nu arunce sau să depoziteze gunoiul în spatile care nu au această destinație; <br />
2. să utilizeze în mod corespunzător bunurile din inventar, instalațiile electrice și sanitare puse la dispoziție și să evite accidentele cauzate de utilizarea necorespunzătoare a acestora, din neatenție sau neglijentă;<br />
3. să nu fumeze în camera, balcon și/sau în spatile închise comune;<br />
4. să nu folosească aparate electrice de încălzire și/sau aparate electrocasnice (cuptor cu microunde, cuptor electric, mașină de spălat, etc);<br />
5. să nu suprasolicite rețeaua electrică prin folosirea simultană a mai multor consumatori și să nu utilizeze aparate electrice, cabluri electrice, prize, intrerupatoare, dispozitive de protecție cu defectini sau cu improvizații;<br />
6. să consemneze în registrul de reparați orice defecțiune apărută în camera, baie, hol sau bucătărie;<br />
7. să nu consume băuturi alcoolice în căminul studențesc și/sau în Campusurile Studențești ale Universității Babeș-Bolyai;<br />
8. să nu se aplece peste marginea balconului, a balustradei scărilor și/sau peste pervazul ferestrei;<br />
9. să nu alerge pe scări;<br />
10. să nu agreseze sub nicio formă locatarii căminului studentese sau vizitatorii acestora;<br />
11. să nu lase copiii nesupravegheați, precum și blocarea lor în camera cu orice fel de surse de foc și/sau aparate electrice aflate în funcțiune; <br />
12. să nu păstreze obiecte sau produse alimentare pe pervazele ferestrelor, pe balcoane și să nu arunce obiecte pe fereastră;<br />
13. să nu deconecteze detectoarele de gaz și să nu blocheze găurile de aerisire;  <br />
14. să nu lase nesupravegheate aparatele de gătit (plitele pe gaz sau plitele electrice) cât timp acestea sunt în funcțiune; <br />
15. să folosească ascensoarele de persoane conform instrucțiunilor de utilizare a acestora, afigate în cabina liftului; <br />
16. să respecte greutatea prevăzută în cabina ascensorului; <br />
17. să nu efectueze nicio modificare a camerei, a mobilierului și a poziției lui în camere, a instalației aferente camerei; <br />
18. să nu utilizeze spațiile de locuit și cele de folosință comună în alte scopuri decât cele pentru care au fost atribuite; <br />
19. să fie atenți la ieșirea din cadă de dus sau cabina de dus, să nu alunece. <br /> </strong>
<div className="signcontract"> 
Chirias, <br />
<label htmlFor="signContract">Semnătură</label>
        <br/>
        <input value={signContract} 
        type="text" 
        name="signContract"
        placeholder="nume şi prenume"
        onChange={handleContractInput} />
        <br /> </div>
</p>
</div> <br />
                {showAlert && <Alert/>} <br />
            <button type="submit" onClick={handleSubmit}>Trimite contractul</button>
                </form> <br />
                <br />
            <button ><Link to='/cereri' className="button-text">Încă nu ai aplicat?</Link></button> 
            </section>
    <Footer/>
    </div>
);
}
export default Contract;