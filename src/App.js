import React from 'react';
import { BrowserRouter as Router, Route, Routes}  from "react-router-dom";

import Home from './home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Portfolio" component={Portfolio}></Route>
        <Route path="/Resume" component={Resume}></Route>

      </Routes>
    </Router>
  )
}

export default App;

