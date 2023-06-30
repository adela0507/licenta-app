import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import Cerers from './Cerers'

const CereriContainer = () => {
    const {getCerers,cererss,totalCerers}=useAppContext()
    
    useEffect(()=>{
        getCerers()
    },[])

    if(cererss.length===0){
       return <h2>Nu există cereri!</h2>
    } 

  return (
    <div className='culoare'>
      <h5>{totalCerers} cereri găsite </h5> <br />
      <div>
        {cererss.map((cereri)=>{
            return <Cerers key={cereri._id}{...cereri}/>
        })}
      </div>
    </div>
  )
}

export default CereriContainer
