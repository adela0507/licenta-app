import React from 'react'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'
const Cerers = ({email,grade,name,lastName,_id}) => {
const {setEditCerers,editCerere,isEditing}=useAppContext()
        if(isEditing){
                editCerere()
              return
        }
  return (
    <div>
      <table border='1' width='800' height='200'>
        <tbody>
<tr>
  <th>nume</th>
  <th>prenume</th>
  <th>email</th>
  <th>nota</th>

  </tr>     
  <tr>
    <td>{name}</td>
    <td>{lastName}</td>
    <td>{email}</td> 
    <td>{grade}</td> 
    </tr>
    </tbody>
   </table>
   {/* <Link to='/cereri' className='btn' onClick={()=>setEditCerers(_id)}>Editeaza</Link> */}
     {/* <button type='button' className='btn' onClick={()=>{setEditCerers(_id)}}>Modifica</button> */}
    </div>
  )
}

export default  Cerers
