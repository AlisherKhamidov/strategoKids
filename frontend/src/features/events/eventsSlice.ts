import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import Event, { EventId } from './types/Event';
import EventsListState from './types/EventsListState';

const initialState: EventsListState = {
  eventsArr: [],
};

export const loadEvents = createAsyncThunk('events/loadEvents', () =>
  api.loadEvents()
);
export const addEvent = createAsyncThunk('events/addEvent', async (event: any) => {
 const newEvent = await api.addEvent(event);
 console.log(newEvent);
 return newEvent;
}
);
export const deleteEvent = createAsyncThunk('events/deleteEvent', async (id: EventId) => {
  await api.deleteEvent(id);
  return id;
});

export const updateEvent = createAsyncThunk('events/updateEvent', async (event: Event) => {
  await api.updateEvent(event);
  return event;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadEvents.fulfilled, (state, action) => {
      state.eventsArr = action.payload;

      // Object.assign(action.payload);
    })
    .addCase(addEvent.fulfilled, (state, action) => {
      state.eventsArr.push(action.payload);
}
      // Object.assign(action.payload)
      )
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.eventsArr = state.eventsArr.filter((event) => event.id !== action.payload);
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        const oldEvent = state.eventsArr.find(
          (x) => x.id === action.payload.id
        );

        Object.assign(oldEvent!, action.payload);
      });
  },
});

export default eventsSlice.reducer;
