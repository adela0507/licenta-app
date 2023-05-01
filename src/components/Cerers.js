import React from 'react'
import{Link} from 'react-router-dom'

const Cerers = ({email,grade,name,lastName}) => {
  return (
    <div>
      <table border='1' width='800' height='200'>
<tr>
  <th>nume</th>
  <th>prenume</th>
  <th>email</th>
  <th>nota</th>
  <th>status</th>
  <th>editeaza</th>
  </tr>     
  <tr>
    <td>{name}</td>
    <td>{lastName}</td>
    <td>{email}</td> 
    <td>{grade}</td> 
    <td></td>
    <button type='button' className='btn'>Modifica statusul</button>
    </tr>
   </table>
    </div>
  )
}

export default Cerers
