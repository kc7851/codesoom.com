import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Course from './pages/Course';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
        <Switch>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
