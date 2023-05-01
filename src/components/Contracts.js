import React from 'react'
import{Link} from 'react-router-dom'

const Contracts = ({emailContract,nameContract,telContract}) => {
  return (
    <div>
      <table border='1' width='800' height='200'>
<tr>
  <th>nume</th>
  <th>email</th>
  <th>telefon</th>
  <th>status</th>
  <th>editeaza</th>

  </tr>     
  <tr>
    <td>{nameContract}</td>
    <td>{emailContract}</td> 
    <td>{telContract}</td>
    <td></td>
    <button type='button' className='btn'>Modifica statusul</button>
    </tr>
   </table>
    </div>
  )
}

export default Contracts
