import { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Axios from 'axios';
import EditAccountForm from '../EditAccount/EditAccountForm';
//import React, { useEffect } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const RemoveCookie = () => {
    Axios.delete("https://crud-v5x6.onrender.com/users/user-edit/logout")
    .then((res)=>{
      if(res.status===200){
        alert("Logged out Successfully");
        window.location.href = '/'; // Replace '/newPage' with the path of the page you want to navigate to

      }
      else{
        Promise.reject();
      }
    })
    .catch((err)=>alert(err));
  };
  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
  

          {/* <Route path="/profile" element={<Home/>}/> */}



            <li className="nav-text"><Link to='/home'>Home</Link></li>
            <li classname="nav-text"><Link to='/edit-account'>Edit Account</Link></li>
            
            <li className="nav-text"><Link to='/deleteaccount'>Delete Account</Link></li>
            <li className="nav-text" onClick={RemoveCookie}><Link to="">Logout</Link></li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
