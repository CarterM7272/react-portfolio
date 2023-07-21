import React, {useState} from 'react';

import Nav from "./Nav.jsx"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx';

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
