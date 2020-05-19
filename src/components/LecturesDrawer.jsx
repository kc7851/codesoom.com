import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { toggleDrawerOpen, toggleCourse } from '../slice';

import { drawerWidth } from '../assets/styles/common';

const styles = {
  drawer: {
    '.MuiPaper-root': {
      width: drawerWidth,
      height: 'calc(100% - 50px)',
      top: '50px',
    },
  },
  content: {
    padding: '62px 16px 12px 16px',
    width: '100%',
  },
  nested: {
    '.MuiButtonBase-root': {
      paddingLeft: '24px',
    },
  },
  active: {
    '.MuiButtonBase-root': {
      backgroundColor: 'rgba(95, 77, 238, 0.2)',
    },
  },
  list: {
    '&.MuiListItem-root': {
      backgroundColor: '#f7f8fa',
      borderBottom: '1px solid #dedfe0',
    },
  },
};

export default function LecturesDrawer() {
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state) => state.drawerOpen);
  const courses = useSelector((state) => state.courses);

  const isMobile = window.innerWidth <= 576;

  const closeDrawer = () => {
    dispatch(toggleDrawerOpen());
  };

  const handleClick = (id) => {
    dispatch(toggleCourse(id));
  };

  return (
    <Drawer
      open={drawerOpen}
      css={styles.drawer}
      variant={isMobile ? 'temporary' : 'persistent'}
      onClose={closeDrawer}
    >
      {courses.map((course) => (
        <>
          <ListItem
            css={styles.list}
            onClick={() => handleClick(course.id)}
            button
          >
            <ListItemText primary={course.title} />
            {course.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={course.open} timeout="auto" unmountOnExit>
            {course.lectures.map((lecture, index) => (
              <List
                css={[
                  styles.nested,
                  // TODO: Delete in production
                  index === 0 && styles.active,
                ]}
                component="div"
                disablePadding
              >
                <ListItem button>
                  <ListItemText primary={lecture.title} />
                </ListItem>
              </List>
            ))}
          </Collapse>
        </>
      ))}
    </Drawer>
  );
}
