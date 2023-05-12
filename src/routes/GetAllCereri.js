import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchContainer from'../components/SearchContainer'
import CereriContainer from '../components/CereriContainer'
import ContractContainer from '../components/ContractContainer'
import { useAppContext } from '../context/appContext'

const GetAllCereri = () => {
  const { user } = useAppContext()
  const isAdmin = user && user.email === 'admin@admin.com';
  if (!isAdmin) {
    return <div>Nu eşti autorizat pentru a putea accesa acestă pagină! </div>
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
