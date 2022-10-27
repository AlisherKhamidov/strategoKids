import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import KidData from './types/KidData';
import EventsListState from './types/KidsState';

const initialState: EventsListState = {
  kidsArr: [],
};

export const loadKids = createAsyncThunk('kids/loadKids', () =>
  api.loadKids()
);

export const addKid = createAsyncThunk('kids/addKid',
async (kid: KidData) => {
 const newKid = await api.addKid(kid);
 return newKid;
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

const kidsSlice = createSlice({
  name: 'kids',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadKids.fulfilled, (state, action) => {
      state.kidsArr = action.payload;
    })
    .addCase(addKid.fulfilled, (state, action) => {
      state.kidsArr.push(action.payload);
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

export default kidsSlice.reducer;
