import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import Like from './types/Like';
import LikeData from './types/LikeData';
import EventsListState from './types/LikeState';

const initialState: EventsListState = {
  likesArr: [],
};

export const loadLikes = createAsyncThunk('likes/loadLikes', () =>
  api.loadLikes()
);

export const addLike = createAsyncThunk('likes/addLike',
async (like: LikeData) => {
 const newLike = await api.addLike(like);
 return newLike;
}
);
// export const deleteEvent = createAsyncThunk('events/deleteEvent', async (id: EventId) => {
//   await api.deleteEvent(id);
//   return id;
// });

// export const updateEvent = createAsyncThunk('events/updateEvent', async (event: Event) => {
//   await api.updateEvent(event);
//   return event;
// });

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadLikes.fulfilled, (state, action) => {
      console.log(action.payload);
      state.likesArr = action.payload;
    })
    .addCase(addLike.fulfilled, (state, action) => {
      state.likesArr.push(action.payload);
    });
    // .addCase(deleteEvent.fulfilled, (state, action) => {
    //   state.eventsArr = state.eventsArr.filter((event) => event.id !== action.payload);
    // })
    // .addCase(updateEvent.fulfilled, (state, action) => {
    //   const oldEvent = state.eventsArr.find(
    //    (x) => x.id === action.payload.id
    // );
    // Object.assign(oldEvent!, action.payload);
    //   });
  },
});

export default likesSlice.reducer;
