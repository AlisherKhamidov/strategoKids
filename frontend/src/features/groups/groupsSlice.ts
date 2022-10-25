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

export const createGroup = createAsyncThunk('groups/createGroup', async (group: { title: string, img: string, info: string }) => {
  const newGroup = await api.createGroup(group);
  return newGroup;
});

export const deleteGroup = createAsyncThunk('groups/deleteGroup', async (id: GroupId) => {
  await api.deleteGroup(id);
  return id;
});

export const updateGroup = createAsyncThunk('groups/updateGroup', async (newGroup: Group) => {
  await api.updateGroup(newGroup);
  return newGroup;
});

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadGroups.fulfilled, (state, action) => {
      state.groupsArr = action.payload;
    })
    .addCase(createGroup.fulfilled, (state, action) => {
      state.groupsArr.push(action.payload);
    })
    .addCase(deleteGroup.fulfilled, (state, action) => {
      state.groupsArr = state.groupsArr.filter((gr) => gr.id !== action.payload);
    })
    // .addCase(updateGroup.fulfilled, (state, action) => {
    //   state.groupsArr = state.groupsArr.map((gr) =>
    //   gr.id === action.payload.id ?
    //   { ...gr, title: action.payload.title, img: action.payload.img, info: action.payload.info }
    //   : gr);
    // });
    .addCase(updateGroup.fulfilled, (state, action) => {
      const oldGroup = state.groupsArr.find(
        (x) => x.id === action.payload.id
      );

      Object.assign(oldGroup!, action.payload);
    });
  },
});

export default groupsSlice.reducer;
