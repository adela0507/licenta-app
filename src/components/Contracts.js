import React from 'react'
import { useAppContext } from '../context/appContext'
import MailToContract from './MailToContract'
const Contracts = ({emailContract,nameContract,telContract,_id}) => {
  const {deleteContracts}=useAppContext()
  return (
    <div>
      <table border='3' width='800' height='200'>
        <tbody>
<tr>
  <th>Nume</th>
  <th>Email</th>
  <th>Telefon</th>

  </tr>     
  <tr>
    <td>{nameContract}</td>
    <td>{emailContract}</td> 
    <td>{telContract}</td>
    </tr>
    </tbody>
   </table> <br />
      <button type='button' className='btn' onClick={()=>deleteContracts(_id)}>Sterge</button> <br />
      <MailToContract email={emailContract} >Email</MailToContract> <br /> <br />
    </div>
  )
}

export default Contracts
