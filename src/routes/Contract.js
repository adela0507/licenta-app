import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contract(){
return(
    <div>
    <Navbar/>
    <section className="section">
        <div className="title">
        </div>
        <form action="POST" >
            <h3 className="cerere">
                CONTRACT DE INCHIRIERE
            </h3>
            <br />
            <p className="cerere">
                
                <label htmlFor="name">Nr.</label>
                <input type="number" /> 
                <label htmlFor="date">din</label>
                <input type="date" />

            </p>
            <h4>Art. I. PĂRŢILE CONTRACTANTE</h4>
            <p>1.1. Universitatea Babeş-Bolyai, cu sediul în Clui-Napoca 400084, str. Mihail Kogălniceanu nr. 1 reprezentată prin Rector Prof.univ.dr. Daniel David,
                 în calitate de proprietar şi <br /> 1.21

<label htmlFor="name"></label>
                <input type="text" placeholder="numele tau" /> 
                
fiul (fica) lui
<label htmlFor="name"></label>
                <input type="text" placeholder="numele tatalui" /> 
 
şi a 
<label htmlFor="name"></label>
                <input type="text" placeholder="numele mamei" /> 
 
student(ă) la
<label htmlFor="name"></label>
                <input type="text" placeholder="FSEGA" /> 
 
- anul <label htmlFor="name"></label>
                <input type="number" placeholder="anum de studiu in care esti" /> 
 , cu domiciliul in localitatea  <label htmlFor="name"></label>
                <input type="text" placeholder="localitatea ta" /> 
  str. <label htmlFor="name"></label>
                <input type="text" placeholder="strada" /> 
 ,
<label htmlFor="name"></label>
                <input type="text" placeholder="adresa ta" /> 
  judeţul <label htmlFor="name"></label>
                <input type="text" placeholder="judetul din care esti" /> 
  , posesor al BI/CI seria <label htmlFor="name"></label>
                <input type="text" placeholder="" /> 
  nr. <label htmlFor="name"></label>
                <input type="numar" placeholder="" /> 
eliberat de <label htmlFor="name"></label>
                <input type="text" placeholder="unde a fost eliberat" /> 
                 la data de <label htmlFor="name"></label>
                <input type="date" placeholder="" /> , CNP <label htmlFor="name"></label>
                <input type="number" placeholder="" /> 
 telefon <label htmlFor="name"></label>
                <input type="number" placeholder="nr tau de telefon" /> 
e-mail <label htmlFor="name"></label>
                <input type="email" placeholder="emailul tau" /> 
chirias.
</p>
            </form>
            </section>
    <Footer/>
    </div>
);
}
export default Contract;