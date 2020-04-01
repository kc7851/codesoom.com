import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top top-nav-collapse">
      <div className="container">

        <a className="navbar-brand logo-text page-scroll" href="index.html">CodeSoom</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">강의</a>
            </li>
          </ul>
          {/* 로그인 안했을 때 
            <span className="nav-item">
              <a className="btn-outline-sm" href="log-in.html">로그인</a>
            </span> 
          */}

          <span className="nav-item">
            <a className="btn-outline-sm" href="log-in.html">My</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
