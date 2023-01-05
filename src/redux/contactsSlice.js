import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLogin = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLogin = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // extraReducers: {
    //   [fetchContacts.pending]: state => {
    //     state.isLoading = true;
    //   },
    //   [fetchContacts.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   },
    //   [fetchContacts.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
    //   [addContact.pending]: state => {
    //     state.isLoading = true;
    //   },
    //   [addContact.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   },
    //   [addContact.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
    //   [deleteContact.pending]: state => {
    //     state.isLoading = true;
    //   },
    //   [deleteContact.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = state.items.filter(item => item.id !== action.payload);
    //   },
    //   [deleteContact.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
    //   [updateContact.pending]: state => {
    //     state.isLoading = true;
    //   },
    //   [updateContact.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     // state.items = state.items.map(item => {
    //     //   if (item.id === action.id) {
    //     //     return (item = action);
    //     //   }
    //     //   return item;
    //     // });},
    //     const index = state.items.findIndex(
    //       contact => contact.id === action.payload.id
    //     );
    //     state.items.splice(index, 1, action.payload);
    //   },
    //   [updateContact.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
  },
});
