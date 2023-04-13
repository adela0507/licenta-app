import "./NavbarStyles.css";
import {FaHome,FaAlignRight,FaUserCircle,FaCaretDown, FaAlignLeft} from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useState } from "react";
import {MenuItems} from '../components/MenuItems'

const Navbar=()=>{
    const{logoutUser,user}=useAppContext()
    const [showLogout,setShowLogout]=useState(false)
    const navigate=useNavigate();

    
        return<Wrapper>
<nav className="NavbarItems">
    <h1 className="gradient">UBBFSEGA</h1>
   <div >
    <div className="button1">
        <ul className={user? "nav-menu active" :"nav-menu"}>
        {MenuItems.map((item,index)=>{
            return (
                <li key={index}><Link className={item.cName} to={item.url}>{item.icons}{item.title}</Link>
                <button></button>
                </li>
            );
        })}
    </ul>
    </div>
    <button></button>
     <button type='button' 
  className='btn' 
  onClick={()=>setShowLogout(!showLogout)}>
    <FaUserCircle/> {user?user.name: navigate('/login')} <FaCaretDown/>
  </button>
  <div className={showLogout?'dropdown show-dropdown':'dropdown'}>
    <button type='button' className='btn'
     onClick={logoutUser}>Logout
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
  

`

export default Navbar;