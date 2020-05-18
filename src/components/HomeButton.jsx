import React from 'react';

import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

const homeButton = {
  '&.MuiButtonBase-root': {
    color: 'white',
  },
};

export default function HomeButton({ className }) {
  return (
    <Link to="/">
      <IconButton
        className={className}
        css={homeButton}
        aria-label="home"
        size="small"
      >
        <HomeIcon />
      </IconButton>
    </Link>
  );
}
