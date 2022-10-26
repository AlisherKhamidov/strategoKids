import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Data from '../applications/types/Data';
import DataState from '../applications/types/DataState';
import * as api from './api';

const initialState: DataState = {
    applicationsArr: [],
};

export const notAccepted = createAsyncThunk('adminApplications', () =>
  api.loadApplications()
);

export const Accepted = createAsyncThunk('adminApplicationsAccepted', () =>
  api.loadApplicationsAccepted()
);

export const changeStatus = createAsyncThunk('adminApplications/updateApp', async (newApplication: Data) => {
  await api.updateApplicationsLoading(newApplication);
  return newApplication;
});

const adminSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder
      .addCase(notAccepted.fulfilled, (state, action) => {
        state.applicationsArr = action.payload;
      })
      .addCase(Accepted.fulfilled, (state, action) => {
        state.applicationsArr = action.payload;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        const oldApplication = state.applicationsArr.find(
          (x) => x.id === action.payload.id
        );

        Object.assign(oldApplication!, action.payload);
      });
    }
});

export default adminSlice.reducer;
