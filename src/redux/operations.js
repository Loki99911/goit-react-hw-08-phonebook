import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(`Error! Bad request.`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async object => {
    try {
      const response = await axios.post('/contacts', object);
      return response.data;
    } catch (error) {
      toast.error(`Error! Bad request.`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      toast.error(`Error! Bad request.`);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }) => {
    try {
      const object = { name, number };
      const response = await axios.patch(`/contacts/${id}`, object);
      return response.data;
    } catch (error) {
      toast.error(`Error! Bad request.`);
    }
  }
);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signupUser = createAsyncThunk('user/signupUser', async object => {
  try {
    const response = await axios.post('/users/signup', object);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    toast.error(`Error! Bad request.`);
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async object => {
  try {
    const response = await axios.post('/users/login', object);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    toast.error(`Wrong Mail or Password!`);
  }
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    toast.error(`Bad request.`);
  }
});

export const getCurrentUser = createAsyncThunk(
  'user/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if (state.user.token === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(state.user.token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
