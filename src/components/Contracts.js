import React from 'react'
import { useAppContext } from '../context/appContext'
const Contracts = ({emailContract,nameContract,telContract,_id}) => {
  const {setEditContract}=useAppContext()
  return (
    <div>
      <table border='1' width='800' height='200'>
        <tbody>
<tr>
  <th>nume</th>
  <th>email</th>
  <th>telefon</th>

  </tr>     
  <tr>
    <td>{nameContract}</td>
    <td>{emailContract}</td> 
    <td>{telContract}</td>
    </tr>
    </tbody>
   </table>
       {/* <button type='button' className='btn' onClick={()=>{setEditContract(_id)}}>Modifica statusul</button> */}

    </div>
  )
}

export default Contracts
