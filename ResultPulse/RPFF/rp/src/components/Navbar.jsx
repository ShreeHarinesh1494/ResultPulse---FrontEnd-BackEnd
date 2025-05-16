import React from 'react';
import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Result<span>Pulse</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}
