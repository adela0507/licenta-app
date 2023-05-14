import React from 'react'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'
const Cerers = ({email,grade,name,lastName,_id}) => {
const {deleteCerers}=useAppContext()
  return (
    <div>
      <table border='1' width='800' height='200'>
        <tbody>
<tr>
  <th>Nume</th>
  <th>Prenume</th>
  <th>Email</th>
  <th>Nota</th>

  </tr>     
  <tr>
    <td>{name}</td>
    <td>{lastName}</td>
    <td>{email}</td> 
    <td>{grade}</td> 
    </tr>
    </tbody>
   </table> <br />
   <button type='button' className='btn' onClick={()=>deleteCerers(_id)}>Sterge</button> <br /> <br />
    </div>
  )
}

export default  Cerers
