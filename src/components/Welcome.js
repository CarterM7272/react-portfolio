import React, {useState} from 'react';

import Nav from "./Nav.js"
import Home from './Welcome';
import About from './components/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './Resume';

export default function Welcome() {
  const [currentPage, newPage] = useState('Home');

  const displayPage = () => {
    if (currentPage === 'Home')  {
      return <Home />
    }
    if (currentPage === 'About')  {
      return <About />
    }
    if (currentPage === 'Contact')  {
      return <Contact />
    }
    if (currentPage === 'Portfolio')  {
      return <Portfolio />
    }
    if (currentPage === 'Resume')  {
      return <Resume />
    }
  }


  const changePage = (page) => newPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} changePage={changePage}/>
      {displayPage()}
    </div>
  )




}
