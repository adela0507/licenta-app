import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import SingleContract from './SingleCerere'

const SingleCaminContainer = () => {
    const {getSingleContract,contractUtilizator,totalContractUtilizator}=useAppContext()
    
    useEffect(()=>{
        getSingleContract()
    },[])

if (!contractUtilizator || contractUtilizator.length === 0) {
  return <h2>nu exista cereri</h2>;
}
  return (
    <div>
      <h5>{totalContractUtilizator} cereri gasite </h5>
      <div>
        {contractUtilizator && contractUtilizator.map((cererea)=>{
            return <SingleContract key={cererea._id}{...cererea}/>
        })}
      </div>
    </div>
  )
}

export default SingleCaminContainer
