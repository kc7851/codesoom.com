import React from 'react';
import { Link } from 'react-router-dom';

import mq from '../styles/breakpoints';

const styles = {
  breadcrumbs: {
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f3f7fd',
  },
  container: mq({
    maxWidth: ['', '540px', '720px', '960px'],
    margin: 'auto',
    padding: '0 15px',
    width: '100%',
    '& .fa': {
      marginRight: '0.5rem',
      marginLeft: '0.625rem',
    },
  }),
};

export default function Breadcrumbs({ children }) {
  return (
    <div css={styles.breadcrumbs}>
      <div css={styles.container}>
        <Link to="/">홈</Link>
        <i className="fa fa-angle-double-right" />
        {children}
      </div>
    </div>
  );
}
