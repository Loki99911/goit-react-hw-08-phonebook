import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { userSlice } from './userSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  user: userSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});
