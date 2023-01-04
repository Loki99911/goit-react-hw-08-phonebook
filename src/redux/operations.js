import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async object => {
    console.log(object);
    const response = await axios.post('/contacts', object);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data.id;
  }
);

// export const updateContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async ({id, object}) => {
//     const response = await axios.patch(`/contacts/${id}`, object);
//     return response.data;
//   }
// );

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signupUser = createAsyncThunk('user/signupUser', async object => {
  const response = await axios.post('/users/signup', object);
  token.set(response.data.token);
  return response.data;
});

export const loginUser = createAsyncThunk('user/loginUser', async object => {
  const response = await axios.post('/users/login', object);
  token.set(response.data.token);
  return response.data;
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  await axios.post('/users/logout');
  token.unset();
});
// token - прошить!!!!
export const getCurrentUser = createAsyncThunk(
  'user/currentUser',
  async () => {
    const response = await axios.get('/users/current');
    return response.data;
  }
);
