import React from 'react';

import { useDispatch } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { toggleDrawerOpen } from '../slice';

const styles = {
  toggleButton: {
    '&.MuiButtonBase-root': {
      color: 'white',
    },
  },
};

export default function DrawerButton() {
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(toggleDrawerOpen());
  };

  return (
    <IconButton
      css={styles.toggleButton}
      onClick={toggleDrawer}
      aria-label="menu"
      size="small"
    >
      <MenuIcon />
    </IconButton>
  );
}
