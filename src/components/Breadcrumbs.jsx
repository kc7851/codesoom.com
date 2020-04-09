import React from 'react';
import { Link } from 'react-router-dom';

import Container from './Container';

const styles = {
  breadcrumbs: {
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f3f7fd',
  },
  arrow: {
    marginRight: '0.5rem',
    marginLeft: '0.625rem',
  },
};

export default function Breadcrumbs({ children }) {
  return (
    <div css={styles.breadcrumbs}>
      <Container>
        <Link to="/">홈</Link>
        <i css={styles.arrow} className="fa fa-angle-double-right" />
        {children}
      </Container>
    </div>
  );
}
