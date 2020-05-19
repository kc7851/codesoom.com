import React from 'react';

import { useSelector } from 'react-redux';

import ReactMarkdown from 'react-markdown';

import facepaint from 'facepaint';

import { drawerWidth } from '../assets/styles/common';

// TODO: Replace real data in production
import ReactIntro from '../assets/documents/intro-react.md';

const breakpoints = [576, 1348];

const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`),
);

const styles = {
  opendContent: mq({
    paddingLeft: ['16px', `calc(${drawerWidth} + 16px)`, '16px'],
    maxWidth: ['initial', 'initial', '868px'],
    margin: ['initial', 'initial', 'auto'],
  }),
  content: {
    padding: '62px 16px 12px 16px',
    width: '100%',
    margin: 'auto',
    maxWidth: '868px',
  },
};

export default function LectureContent() {
  const drawerOpen = useSelector((state) => state.drawerOpen);

  return (
    <main
      css={[
        styles.content,
        drawerOpen && styles.opendContent,
      ]}
    >
      <ReactMarkdown escapeHtml={false} source={ReactIntro} />
    </main>
  );
}
