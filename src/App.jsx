import React from 'react';

import Reset from './components/Reset';
import Wadiz from './pages/Wadiz';

function App() {
  return (
    <>
      <Reset />
      <Wadiz />
      {/* <Router>
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
      </Router> */}
    </>
  );
}

export default App;
