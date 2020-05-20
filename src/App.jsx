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
import LecturePage from './pages/LecturePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import MyPage from './pages/MyPage';
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
            <Switch>
              <Route path="/courses/:courseId/lectures/:lectureId">
                <Nav />
                <LecturePage />
              </Route>
              <Route path="/">
                <Nav />
                <Switch>
                  <Route exact path="/courses/:id">
                    <Course />
                  </Route>
                  <Route path="/privacy-policy">
                    <PrivacyPolicy />
                  </Route>
                  <Route path="/terms-conditions">
                    <TermsConditions />
                  </Route>
                  <Route path="/my">
                    <MyPage />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                <Footer />
              </Route>
            </Switch>
          </Router>
        )}
    </>
  );
}

export default App;
