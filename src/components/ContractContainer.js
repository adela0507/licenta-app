import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import Contracts from './Contracts'

const ContractContainer = () => {
  const {getContracts,contractss,totalContractss}=useAppContext()
    
    useEffect(()=>{
        getContracts()
    },[])

    if(contractss.length===0){
       return <h2>Nu există contracte!</h2>
    }

  return (
    <div className='culoare'>
      <h5>{totalContractss} contracte găsite </h5>
      <div>
        {contractss.map((contract)=>{
            return <Contracts key={contract._id}{...contract}/>
        })}
      </div>
    </div>
  )
}

export default ContractContainer
