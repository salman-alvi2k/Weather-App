import React from 'react';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Clock from './components/Clock';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Navbar} />
          <Route path='/Weather' component={Weather} />
          <Route path='/Clock'  component={Clock} />
          <Route path='/About'  component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;