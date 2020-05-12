import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    drawerOpen: false,
  },
  reducers: {
    toggleDrawerOpen: (state) => ({
      ...state,
      drawerOpen: !state.drawerOpen,
    }),
  },
});

export const {
  toggleDrawerOpen,
} = actions;

export default reducer;
