import React from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My App</div>
      <ul className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </ul>
    </nav>
  );
}

export default Navbar;
