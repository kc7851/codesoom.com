import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Reset from './components/Reset';
import Wadiz from './pages/Wadiz';
import Nav from './components/Nav';
import Home from './pages/Home';
import Course from './pages/Course';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Footer from './components/Footer';

function App() {
  const isLanding = true;

  return (
    <>
      {isLanding
        ? (
          <>
            <Reset />
            <Wadiz />
          </>
        )
        : (
          <Router>
            <ScrollToTop />
            <Nav />
            <Switch>
              <Route path="/course">
                <Course />
              </Route>
              <Route path="/privacy-policy">
                <PrivacyPolicy />
              </Route>
              <Route path="/terms-conditions">
                <TermsConditions />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Router>
        )}
    </>
  );
}

export default App;
