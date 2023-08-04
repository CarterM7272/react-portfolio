import React, { useState } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Home />
      case 'Portfolio':
        return <Portfolio />
      case 'Resume':
        return <Resume />
      case 'About':
        return <About />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div>
      <Header changePage={changePage} />
      {renderPage()}
    </div>
  );
};

export default App;