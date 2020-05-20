import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';

import Thumbnail from '../components/Thumbnail';

import mq from '../styles/breakpoints';

// TODO: Delete in production
const cat = 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg';

const styles = {
  root: {
    padding: '86px 12px 66px 12px',
    minHeight: 'calc(100vh - 373px)',
  },
  profile: mq({
    display: 'flex',
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'initial'],
    margin: 'auto',
    maxWidth: '880px',
    borderRadius: '3px',
  }),
  info: mq({
    padding: ['16px', '16px 24px 16px 24px'],
    width: ['100%', ''],
    wordBreak: 'break-word',
  }),
  githubIcon: {
    '&.MuiSvgIcon-root': {
      fontSize: '40px',
      marginTop: '24px',
    },
  },
};

export default function MyPage() {
  return (
    <div css={styles.root}>
      <div css={styles.profile}>
        <Thumbnail url={cat} />

        {/* Delete in production */}
        <div css={styles.info}>
          <h1>Yunseok</h1>
          <h4>codesoom@codesoom.com</h4>
          <a
            href="https://github.com/hannut91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon css={styles.githubIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
