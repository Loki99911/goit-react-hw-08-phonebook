import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from './operations';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
    // error: null,
  },

  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
    },

    [logoutUser.fulfilled]: (state, action) => {
      state.token = null;
      state.user = { name: null, email: null };
      state.isLogin = false;
    },

    [getCurrentUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
});
