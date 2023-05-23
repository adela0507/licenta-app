import React from 'react'
import { useAppContext } from '../context/appContext'
import MailToContract from './MailToContract'
import PDFButtonContract from './PDFContract'
const Contracts = ({emailContract,nameContract,telContract,_id,dadName,momName,studyYearContract,addressContract,
  ci,numberCI,ciAddress,dateContract,cnpContract,taxe,signContract,caminNumber,caminAddress,student}) => {
  const {deleteContracts}=useAppContext()
  return (
    <div>
      <table border='2' width='200' height='100' align='center'>
        <tbody>
<tr>
    <th>Nume</th>
  <th>Email</th>
  <th>Telefon</th>
  <th>An de studiu</th>
  <th>Adresa Studentului</th>
  <th>CI</th>
  <th>Numar CI</th>
  <th>CNP</th>
  <th>Taxa</th>
  <th>Numarul caminului</th>
  <th>Adresa caminului</th>
  <th>Situatia</th>


  </tr>     
  <tr>
    <td>{nameContract}</td>
    <td>{emailContract}</td> 
    <td>{telContract}</td>
    <td>{studyYearContract}</td>
    <td>{addressContract}</td>
    <td>{ci}</td>
    <td>{numberCI}</td>
    <td>{cnpContract}</td>
    <td>{taxe}</td>
    <td>{caminNumber}</td>
    <td>{caminAddress}</td>
    <td>{student}</td>

    </tr>
    </tbody>
   </table> <br />
      <button type='button' className='btn' onClick={()=>deleteContracts(_id)}>Sterge</button> <br />
      <MailToContract email={emailContract} >Email</MailToContract> <br /> <br />
      <PDFButtonContract
        emailContract={emailContract}
        nameContract={nameContract}
        telContract={telContract}
        _id={_id}
        dadName={dadName}
        momName={momName}
        studyYearContract={studyYearContract}
        addressContract={addressContract}
        ci={ci}
        numberCI={numberCI}
        ciAddress={ciAddress}
        dateContract={dateContract}
        cnpContract={cnpContract}
        taxe={taxe}
        signContract={signContract}
        caminNumber={caminNumber}
        caminAddress={caminAddress}
        student={student}
      />
    </div>
  )
}

export default Contracts
