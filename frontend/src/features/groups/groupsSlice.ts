import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import Group, { GroupId } from './types/Group';
import GroupsListState from './types/GroupsListState';

const initialState: GroupsListState = {
  groupsArr: [],
};

export const loadGroups = createAsyncThunk('groups/loadGroups', () =>
  api.loadGroups()
);

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGroups.fulfilled, (state, action) => {
      state.groupsArr = action.payload;

      Object.assign(action.payload);
    });
  },
});

export default groupsSlice.reducer;
