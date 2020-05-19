import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    drawerOpen: true,
    courses: [{
      id: 1,
      title: '1강 JSX',
      lectures: [{
        title: 'JSX 강의',
      }, {
        title: '과제',
      }, {
        title: '피드백 강의',
      }],
    }, {
      id: 2,
      title: '2강 React',
      lectures: [{
        title: 'React 강의',
      }, {
        title: '과제',
      }],
    }],
  },
  reducers: {
    toggleDrawerOpen: (state) => ({
      ...state,
      drawerOpen: !state.drawerOpen,
    }),
    toggleCourse: (state, { payload: courseId }) => ({
      ...state,
      courses: state.courses.map((it) => (
        it.id === courseId
          ? { ...it, open: !it.open }
          : it
      )),
    }),
  },
});

export const {
  toggleDrawerOpen,
  toggleCourse,
} = actions;

export default reducer;
