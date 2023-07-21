import React from 'react';

function Nav({changePage}) {
  return (
    <ul>
      <li>
        <a href="#home"
        onClick={() => changePage('Home')} className="nav-link">Home</a>
      </li>
      <li>
        <a href="#about"
        onClick={() => changePage('Home')} className="nav-link">About</a>
      </li>
      <li>
        <a href="#contact"
        onClick={() => changePage('Home')} className="nav-link">Contact</a>
      </li>
      <li>
        <a href="#portfolio"
        onClick={() => changePage('Home')} className="nav-link">Portfolio</a>
      </li>
      <li>
        <a href="#resume"
        onClick={() => changePage('Home')} className="nav-link">Resume</a>
      </li>
    </ul>
  );
}

export default Nav;

