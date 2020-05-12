import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { toggleDrawerOpen } from '../slice';

import HomeButton from './HomeButton';

const white = {
  color: 'white',
};

const styles = {
  toggleButton: {
    '&.MuiButtonBase-root': {
      ...white,
    },
  },
  courseTitle: {
    ...white,
  },
  homeButton: {
    '&.MuiButtonBase-root': {
      marginLeft: '8px',
    },
  },
};

function Nav() {
  const dispatch = useDispatch();
  const location = useLocation();

  const isLecturePage = () => /courses\/[0-9]+\/lectures\/[0-9]+/.test(location.pathname);

  const toggleDrawer = () => {
    dispatch(toggleDrawerOpen());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top top-nav-collapse">
      {isLecturePage()
        && (
        <IconButton
          css={styles.toggleButton}
          onClick={toggleDrawer}
          aria-label="menu"
          size="small"
        >
          <MenuIcon />
        </IconButton>
        )}

      <div className="container">
        {isLecturePage()
          ? (
            <>
              <span css={styles.courseTitle}>소프트웨어 개발의 지혜 리액트 편</span>
              <HomeButton css={styles.homeButton} />
            </>
          )
          : (
            <Link className="navbar-brand logo-text page-scroll" to="/">
              CodeSoom
            </Link>
          )}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars" />
          <span className="navbar-toggler-awesome fas fa-times" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="/courses/1">강의</Link>
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

export default Nav;
