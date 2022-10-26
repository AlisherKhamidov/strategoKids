import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import Kid, { KidId } from './types/Kid';
import EventsListState from './types/KidsState';

const initialState: EventsListState = {
  kidsArr: [],
};

export const loadKids = createAsyncThunk('kids/loadKids', () =>
  api.loadKids()
);
//  export const addEvent = createAsyncThunk('events/addEvent',
// async (event: { title: string, description: string, photo: string, isTournament: boolean }) => {
//  const newEvent = await api.addEvent(event);
//  return newEvent;
// }
// );
// export const deleteEvent = createAsyncThunk('events/deleteEvent', async (id: EventId) => {
//   await api.deleteEvent(id);
//   return id;
// });

// export const updateEvent = createAsyncThunk('events/updateEvent', async (event: Event) => {
//   await api.updateEvent(event);
//   return event;
// });

const kidsSlice = createSlice({
  name: 'kids',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadKids.fulfilled, (state, action) => {
      state.kidsArr = action.payload;
    });
    // .addCase(addEvent.fulfilled, (state, action) => {
    //   state.eventsArr.push(action.payload);
    // })
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

export default kidsSlice.reducer;
