import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CereriContainer from '../components/CereriContainer'
import ContractContainer from '../components/ContractContainer'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'
const GetAllCereri = () => {
  const { user } = useAppContext()
  const isAdmin = user && user.email === 'admin@admin.com';
  if (!isAdmin) {
    return (<div> 
      <Navbar/> <br /> <br /> <br />
      <h2>404</h2>
      <h2>Ne pare rău!</h2>
      <h2 >Nu eşti autorizat pentru a putea accesa acestă pagină! </h2> <br /> <br /> <br />
    <button type='button' className='btn'><Link to='/'>Înapoi</Link></button>  <br /> <br />
    <Footer/>
    </div>
    )
  }
return <div>
  <Navbar /> <br /> <br /> <br />
  <h2>Cereri</h2>
  <CereriContainer /> <br />
  <h2>Contracte</h2>
  <ContractContainer />
  <Footer />

</div>
}
export default GetAllCereri
