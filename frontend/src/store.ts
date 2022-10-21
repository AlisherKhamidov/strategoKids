// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import groupsSlice from './features/groups/groupsSlice'
// import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
   groups: groupsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =
  useDispatch;

export default store;
