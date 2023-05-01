import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from "react";
import data from '../components/data';
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const Camine=()=>{
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
                   <img src={cazare.image} alt='' />
                   <p>{cazare.description}</p>
                    <p>{cazare.description2}</p>
                    <br />
                   </div>
                );
            })}
               </div>
      
        </div>
        <button className='btn'><Link to='/about'>Doreşti mai multe informaţii despre cămin/viaţa la cămin?</Link></button> <br /> <br /> <br />
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