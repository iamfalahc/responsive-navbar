import React from "react";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <section className="left">
        <h4>Brand Name</h4>
      </section>
      <section className="right">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>SERVICE</span>
        <span>CONTACT</span>
      </section>
      <span><FiMenu /></span>
    </div>
  );
};

export default Navbar;
