import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/about">ABOUT</Link>
        </li>

        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>

        <li>
          <Link to="/contact">CONTACT</Link>
        </li>

        <li>
          <Link to="/resume">RESUME</Link>
        </li>

      </ul>
    </nav>
  );
}

