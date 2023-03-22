import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import camine from '../components/data';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const SingleCaminPage = ()=>{
        const navigate=useNavigate();
        const [error,setError]=useState(false);
        const[camin,setCamin]=useState(camine);
        const[index,setIndex]=useState(0);
return(
        
<div >
        <Navbar/>


            {camine.map(cazare=>{
                return(
                   <div key={cazare.id} className='products-container'>
                    <strong>{cazare.title}</strong>
                    <br />
                  <img src={cazare.image} alt="" />
                  <img src={cazare.image2} alt="" />

                    <p>{cazare.description}</p>
                   </div>
                );
            })}
            <Link to='/camine' className='btn'>back to products</Link>

            <Footer/>
               </div>
);

}
export default SingleCaminPage;