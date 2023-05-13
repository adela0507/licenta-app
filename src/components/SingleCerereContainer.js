import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import SingleCerere from './SingleCerere'

const SingleCerereContainer = () => {
    const {getSingleCerere,cereriUtilizator,totalCereriUtilizator}=useAppContext()
    
    useEffect(()=>{
        getSingleCerere()
    },[])

if (!cereriUtilizator || cereriUtilizator.length === 0) {
  return <h2>nu exista cereri</h2>;
}
  return (
    <div>
      <h5>{totalCereriUtilizator} cereri gasite </h5>
      <div>
        {cereriUtilizator &&cereriUtilizator.map((cererea)=>{
            return <SingleCerere key={cererea._id}{...cererea}/>
        })}
      </div>
    </div>
  )
}

export default SingleCerereContainer
