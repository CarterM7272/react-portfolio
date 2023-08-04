import React, { useState } from 'react';

import Header from './Header';
import Home from "./pages/Home.jsx";
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

const HEADER_HEIGHT = '80px';  // Define this here or import from Header


const Welcome = () => {
  const [currentPage, newPage] = useState('Home');

  const styles = {
    mainContent: {
      paddingTop: HEADER_HEIGHT,
    },
  };

  const displayPage = () => {
    if (currentPage === 'Home')  {
      return (
        <Home />
      )
    }
    if (currentPage === 'About')  {
      return (
        <About />
      )
    }
    if (currentPage === 'Contact')  {
      return (
        <Contact />
      ) 
    }
    if (currentPage === 'Portfolio')  {
      return (
        <Portfolio />
      )
    }
    if (currentPage === 'Resume')  {
      return (
        <Resume />
      )
    }
  }


  const changePage = (page) => newPage(page);

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage}/>
      <main style={styles.mainContent}>
        {displayPage()}
      </main>
    </div>
  );
};


export default Welcome;