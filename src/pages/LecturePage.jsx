import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { toggleDrawerOpen } from '../slice';

import mq from '../styles/breakpoints';

const drawerWidth = 240;

const styles = {
  drawer: {
    '.MuiPaper-root': {
      height: 'calc(100% - 50px)',
      top: '50px',
    },
  },
  opendContent: mq({
    marginLeft: [0, drawerWidth],
  }),
  content: {
    padding: '62px 16px 12px 16px',
    width: '100%',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function LecturePage() {
  const classes = useStyles();
  const drawerOpen = useSelector((state) => state.drawerOpen);

  const isMobile = window.innerWidth <= 576;

  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(toggleDrawerOpen());
  };

  return (
    <div className={classes.root}>
      <Drawer
        open={drawerOpen}
        css={styles.drawer}
        className={classes.drawer}
        variant={isMobile ? 'temporary' : 'persistent'}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={closeDrawer}
      >
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main
        css={[
          drawerOpen && styles.opendContent,
          styles.content,
        ]}
      >
        메인
      </main>
    </div>
  );
}
