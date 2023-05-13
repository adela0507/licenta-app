import React from 'react'

const SingleCerere = ({name,email,lastName,address,tel,studyYear,situation,grade,sign}) => {
  return (
    <div>
      <table border='1' width='800' height='200'>
        <tbody>
<tr>
  <th>nume</th>
  <th>prenume</th>
  <th>email</th>
  <th>nr de telefon</th>
  <th>adresa</th>
  <th>an de studiu</th>
  <th>situatie</th>
  <th>nota</th>
  <th>semnatura</th>

  </tr>     
  <tr>
    <td>{name}</td>
    <td>{lastName}</td>
    <td>{email}</td> 
    <td>{tel}</td> 
    <td>{address}</td> 
    <td>{studyYear}</td> 
    <td>{situation}</td> 
    <td>{grade}</td> 
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
