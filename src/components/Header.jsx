import React, { useState } from 'react';

function Header({ changePage }) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const HEADER_HEIGHT = '80px';

    const styles = {
      container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: "#2c3e50", 
        margin: "0", 
        height: HEADER_HEIGHT,
        padding: '0 50px',
        boxSizing: 'border-box',
        zIndex: '1000',
      },
      buttonDiv: {
        cursor: "pointer",
      },
      undecoratedLink: {
        textDecoration: "none",
        color: "#ecf0f1",
        padding: "0.5rem", 
        fontSize: "1.5rem",
        fontFamily: 'Arial, sans-serif',
        borderBottom: hoveredButton === 'Home' ? '2px solid #ecf0f1' : 'none',
      },
    };


    return (
      <ul style={styles.container}>
        <li style={styles.buttonDiv}
            onMouseEnter={() => setHoveredButton('Home')}
            onMouseLeave={() => setHoveredButton(null)}>
          <a href="#home" onClick={(e) => {e.preventDefault(); changePage('Home')}} className="nav-link" style={styles.undecoratedLink}>
            Home
          </a>
        </li>
        <li style={styles.buttonDiv}
            onMouseEnter={() => setHoveredButton('Home')}
            onMouseLeave={() => setHoveredButton(null)}>
          <a href="#about" onClick={(e) => {e.preventDefault(); changePage('About')}} className="nav-link" style={styles.undecoratedLink}>
            About
          </a>
        </li>
        <li style={styles.buttonDiv}
            onMouseEnter={() => setHoveredButton('Home')}
            onMouseLeave={() => setHoveredButton(null)}>
          <a href="#contact" onClick={(e) => {e.preventDefault(); changePage('Contact')}} className="nav-link" style={styles.undecoratedLink}>
            Contact
          </a>
        </li>
        <li style={styles.buttonDiv}
            onMouseEnter={() => setHoveredButton('Home')}
            onMouseLeave={() => setHoveredButton(null)}>
          <a href="#portfolio" onClick={(e) => {e.preventDefault(); changePage('Portfolio')}} className="nav-link" style={styles.undecoratedLink}>
            Portfolio
          </a>
        </li>
        <li style={styles.buttonDiv}
            onMouseEnter={() => setHoveredButton('Home')}
            onMouseLeave={() => setHoveredButton(null)}>
          <a href="#resume" onClick={(e) => {e.preventDefault(); changePage('Resume')}} className="nav-link" style={styles.undecoratedLink}>
            Resume
          </a>
        </li>
      </ul>
    );
  }



export default Header;