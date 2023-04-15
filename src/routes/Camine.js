import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React,{ useState,useEffect } from "react";
import data from '../components/data';
import styled from 'styled-components'



const Camine=()=>{
  const [readMore, setReadMore] = useState(false);
return(
    <Wrapper>
    <Navbar/>

        <div className='title'>
            <h2> <span className="white1">Prezentare generală</span></h2>
            <br /><br /><br />
            <div className='grid'>
            {data.map(cazare=>{
                return(
                   <div key={cazare.id} className='products-container'>
                    <strong>{cazare.title}</strong>
                    <br />
                    <br />
                   <img src={cazare.image}  />
                     <p>
          {readMore ? cazare.description: `${cazare.description.substring(0, 80)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'arată mai puţin' : '  arată mai mult'}
          </button>
        </p>

                    <p>{cazare.description2}</p>
                    <br /><br />
                   </div>
                );
            })}
               </div>
        <br />
        </div>
   <Footer/>
</Wrapper>

);
}
const Wrapper = styled.section`
  img {
    height: 175px;
    width: 175px;
  }
  
`
export default Camine;