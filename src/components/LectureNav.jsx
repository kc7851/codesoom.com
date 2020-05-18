import React from 'react';

import { Link } from 'react-router-dom';

import DrawerButton from './DrawerButton';
import HomeButton from './HomeButton';

import { main } from '../assets/styles/colors';

const styles = {
  nav: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    left: 0,
    top: 0,
    right: 0,
    height: '50px',
    padding: '0 16px',
    backgroundColor: main,
    boxShadow: '0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1)',
    zIndex: 100,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: 0,
  },
  courseTitle: {
    padding: '0 16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  my: {
    color: 'white',
    height: '32px',
    border: '0.125rem solid #fff',
    padding: '5px 24px',
    borderRadius: '2rem',
    backgroundColor: 'transparent',
    font: '700 0.875rem/0 "Open Sans", sans-serif',
    textDecoration: 'none',
    transition: 'all 0.2s',
    '&:hover': {
      color: main,
      textDecoration: 'none',
      backgroundColor: 'white',
    },
  },
};

export default function LectureNav() {
  return (
    <nav css={styles.nav}>
      <DrawerButton />

      <div css={styles.content}>
        <span css={styles.courseTitle}>소프트웨어 개발의 지혜 리액트 편</span>
        <HomeButton />
      </div>

      <div>
        <Link css={styles.my} to="/">My</Link>
      </div>
    </nav>
  );
}
