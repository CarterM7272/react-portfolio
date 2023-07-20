import React from 'react';

function Nav({ currentPage, changePage}) {
  return (
    <ul>
      <li>
        <a href="#home"
        onClick={() => changePage('Home')}>Home</a>
      </li>
      <li>
        <a href="#about"
        onClick={() => changePage('Home')}>About</a>
      </li>
      <li>
        <a href="#contact"
        onClick={() => changePage('Home')}>Contact</a>
      </li>
      <li>
        <a href="#portfolio"
        onClick={() => changePage('Home')}>Portfolio</a>
      </li>
      <li>
        <a href="#resume"
        onClick={() => changePage('Home')}>Resume</a>
      </li>
    </ul>
  );
}

export default Nav;

