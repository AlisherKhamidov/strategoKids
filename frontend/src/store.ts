import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './features/auth/authSlice';
import groupsSlice from './features/groups/groupsSlice';
// import authReducer from './features/auth/authSlice';
import eventsSlice from './features/events/eventsSlice';
import kidsSlice from './features/kids/kidsSlice';
import adminSlice from './features/adminCabinet/adminSlice';
import likesSlice from './features/likes/likesSlice';

const store = configureStore({
  reducer: {
   auth: authSlice,
   groups: groupsSlice,
   events: eventsSlice,
   kids: kidsSlice,
   applications: adminSlice,
   likes: likesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
