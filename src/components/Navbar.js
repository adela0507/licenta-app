import "./NavbarStyles.css";
import {FaHome,FaAlignRight,FaUserCircle,FaCaretDown, FaAlignLeft,FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useState } from "react";
import {MenuItems} from '../components/MenuItems'

const Navbar=()=>{
    const{logoutUser,user,closeSidebar}=useAppContext()
    const [showLogout,setShowLogout]=useState(false)
    const navigate=useNavigate();
    const[extendNavbar,setExtendNavbar]=useState(false);

    
        return<Wrapper>
<nav className="NavbarItems">
    <h1 className="gradient">UBBFSEGA</h1>
   <div >
    <div className="button1" >
 <button type='button' className='close-button' onClick={()=>{setExtendNavbar((curr)=>!curr)
      ;}} ><FaBars/></button>       
       <ul className={extendNavbar? "nav-menu active" :"nav-menu"}>
        {MenuItems.map((item,index)=>{
            return (
                <li key={index}><Link className={item.cName} to={item.url}>{item.icons}{item.title}</Link>
                </li>
            );
        })}
    </ul>
    </div >
    
     <button type='button' 
  className='nav-links' 
  onClick={()=>setShowLogout(!showLogout)}> 
     {user?user.name: navigate('/login')}<FaCaretDown/>
  </button>
  <div className={showLogout?'show-dropdown':'dropdown'}>
    <button type='button' className='nav-links'
     onClick={logoutUser}>Deconectare
    </button>
    </div>
   </div>
</nav>
</Wrapper>    
    }

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  
  background: var(--white);
  
  .btn {padding-top:-30px;
    margin-top: -20px;

    gap: 0 0.2rem;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
.close-button{
            display: block;
            width: 100%;
            font-size: 1.2rem;
            padding: 2 rem 0;
            @media (min-width: 850px){
              display: none;
            }
        }
.close-button:hover{
            background-color: purple;
            color: white;
            transition:none;
        }
    
`

export default Navbar;