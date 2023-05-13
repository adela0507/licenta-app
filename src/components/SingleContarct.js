import React from 'react'

const SingleCerere = ({nameContract,school,emailContract,sign}) => {
  return (
    <div>
      <table border='1' width='800' height='200'>
        <tbody>
<tr>
  <th>nume</th>
  <th>email</th>
  <th>scoala</th>
  <th>semnatura</th>

  </tr>     
  <tr>
    <td>{nameContract}</td>
    <td>{emailContract}</td> 
    <td>{school}</td> 
    <td>{sign}</td> 
    </tr>
    </tbody>
   </table>
   {/* <Link to='/cereri' className='btn' onClick={()=>setEditCerers(_id)}>Editeaza</Link> */}
     {/* <button type='button' className='btn' onClick={()=>{setEditCerers(_id)}}>Modifica</button> */}
    </div>
  )
}

export default SingleCerere
