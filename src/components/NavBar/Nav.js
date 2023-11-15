import React, { useState } from "react";
import { Axios } from "axios";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav>
      <Link to="/" className="title">
       Profile
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/edit-account">Edit Account</NavLink>
        </li>
        <li>
          <NavLink to="/delete-account">Delete Account</NavLink>
        </li>

         <li  onClick={RemoveCookie}><NavLink to="">Logout</NavLink></li>

      </ul>
    </nav>
  );

};
export default Nav;
