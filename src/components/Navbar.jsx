import React, { useState } from "react";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <h4>Brand Name</h4>
        </div>
        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          <span>HOME</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
          <span>CONTACT</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
