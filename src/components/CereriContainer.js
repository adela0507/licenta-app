import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import Cerers from './Cerers'

const CereriContainer = () => {
    const {getCerers,cererss,totalCerers}=useAppContext()
    
    useEffect(()=>{
        getCerers()
    },[])

    if(cererss.length===0){
       return <h2>nu exista cereri</h2>
    }

  return (
    <div>
      <h5>{totalCerers} cereri gasite </h5>
      <div>
        {cererss.map((cereri)=>{
            return <Cerers key={cereri._id}{...cereri}/>
        })}
      </div>
    </div>
  )
}

export default CereriContainer
