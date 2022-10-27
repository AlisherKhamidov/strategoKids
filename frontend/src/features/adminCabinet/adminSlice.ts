import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Data from '../applications/types/Data';
import DataState from '../applications/types/DataState';
import * as api from './api';

const initialState: DataState = {
    applicationsArr: [],
};

export const loadedApplications = createAsyncThunk('adminApplications', () =>
  api.loadApplications()
);

export const changeStatus = createAsyncThunk('adminApplications/updateApp', async (updatedApplication: { status: boolean, appId: number }) => {
  const data = await api.updateApplicationsLoading(updatedApplication);
  return updatedApplication;
});

const adminSlice = createSlice({
   name: 'applications',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder
      .addCase(loadedApplications.fulfilled, (state, action) => {
        state.applicationsArr = action.payload;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        // console.log(action.payload);
        // state.applicationsArr = state.applicationsArr
        // .map((el) => (el.id === action.payload.id)
        //   ? { ...el, status: action.payload.isChecked } : el);
          // console.log(state.applicationsArr);
        // Object.assign(oldApplication, action.payload);
        const oldApplication = state.applicationsArr.find(
          (x) => x.id === action.payload.appId
        );
        oldApplication!.isChecked = action.payload.status;
      });
    }
});

export default adminSlice.reducer;
