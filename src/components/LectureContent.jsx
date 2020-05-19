import React from 'react';

import { useSelector } from 'react-redux';

import { drawerWidth } from '../assets/styles/common';

import mq from '../styles/breakpoints';

const styles = {
  opendContent: mq({
    marginLeft: [0, drawerWidth],
  }),
  content: {
    padding: '62px 16px 12px 16px',
    width: '100%',
  },
};

export default function LectureContent() {
  const drawerOpen = useSelector((state) => state.drawerOpen);

  return (
    <main
      css={[
        drawerOpen && styles.opendContent,
        styles.content,
      ]}
    >
      메인
    </main>
  );
}
