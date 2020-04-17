import React from 'react';

import mq from '../styles/breakpoints';

const header = mq({
  padding: ['8rem 0 5rem 0', '11rem 0 9rem 0', ''],
  backgroundColor: '#5f4dee',
  textAlign: 'center',
  '& h1': {
    color: 'white',
  },
});

export default function MainHeader({ children }) {
  return (
    <header css={header}>
      <h1>{children}</h1>
    </header>
  );
}
