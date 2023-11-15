import React, { useState } from "react";

import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <li>
          <NavLink to="/contact">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );

};
export default Nav;