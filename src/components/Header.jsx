import React from 'react';

import HeaderFrame from './HeaderFrame';

function Header() {
  return (
    <>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5">
                <div className="text-container">
                  <h1>SaaS App HTML Landing Page</h1>
                  <p className="p-large">Use Tivo to automate your marketing actions in order to reach a much larger audience
                  </p>
                  <a className="btn-solid-lg page-scroll" href="sign-up.html">SIGN UP</a>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                <div className="image-container">
                  <div className="img-wrapper">
                    <img className="img-fluid" src="src/images/header-software-app.png" alt="alternative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderFrame />
    </>
  );
}

export default Header;
