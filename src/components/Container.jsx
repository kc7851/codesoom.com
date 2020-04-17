import React from 'react';

import mq from '../styles/breakpoints';

const styles = {
  container: mq({
    maxWidth: ['', '540px', '720px', '960px', '1140px'],
    margin: 'auto',
    padding: '0 15px',
    width: '100%',
  }),
};

export default function Container({ children }) {
  return (
    <div css={styles.container}>{children}</div>
  );
}
