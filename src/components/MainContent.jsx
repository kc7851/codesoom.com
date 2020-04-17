import React from 'react';

import mq from '../styles/breakpoints';

const content = mq({
  paddingTop: '4.75rem',
  paddingBottom: ['4rem', '', '', '5rem'],
});

export default function MainContent({ children }) {
  return (
    <div css={content}>{children}</div>
  );
}
