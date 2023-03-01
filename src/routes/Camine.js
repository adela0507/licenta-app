import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FeaturedCamine from '../components/FeaturedCamine';
import React,{ useState,useEffect } from "react";
import data from '../components/data';
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const Camine=()=>{
return(
    <Wrapper>
    <Navbar/>

        <div className='title'>
            <h2> <span className="white1">Prezentare generala</span></h2>
            <br /><br /><br />
            <div className='grid'>
            {data.map(cazare=>{
                return(
                   <div key={cazare.id} className='products-container'>
                    <strong>{cazare.title}</strong>
                    <br />
                    <br />
                    <Link to='/camine/:id'><img src={cazare.image}  /></Link>
                    <br /><br />
                    <p>{cazare.description}</p>
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
  }
  }
`
export default Camine;