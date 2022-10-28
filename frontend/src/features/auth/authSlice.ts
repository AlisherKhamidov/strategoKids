import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import RegisterData from './types/RegisterDada';
import * as api from './api';
import Credentials from './types/Credentials';

const initialState: AuthState = {
    authChecked: false,
    user: undefined,
    loginFormError: undefined,
    registerFormError: undefined,
  };

  export const getUser = createAsyncThunk('auth/user', () => api.user());

  export const register = createAsyncThunk(
    'auth/register',
    async (data: RegisterData) => {
      // eslint-disable-next-line no-console
      console.log(data.phone.length);
      if (data.name.length < 2) {
        throw new Error('Введите полное имя, пожалуйста');
      }
      if (data.phone.length < 11) {
        throw new Error('Введите корректный номер, пожалуйста');
      }
      if (!data.name.trim() || !data.password.trim() || !data.email.trim() || !data.phone.trim()) {
        throw new Error('Не все поля заполнены');
      }
      if (data.password !== data.passwordRepeat) {
        throw new Error('Пароли не совпадают');
      }
      return api.register(data);
    }
  );

  export const login = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials) => {
      if (!credentials.phone.trim() || !credentials.password.trim()) {
        throw new Error('Не все поля заполнены');
      }

      return api.login(credentials);
    }
  );

  export const logout = createAsyncThunk('auth/logout', api.logout);

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetRegisterFormError: (state) => {
            state.registerFormError = undefined;
        },
        resetLoginFormError: (state) => {
          state.loginFormError = undefined;
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getUser.fulfilled, (state, action) => {
          state.authChecked = true;
          state.user = action.payload.isLoggedIn
            ? action.payload.user
            : undefined;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload;
            state.registerFormError = undefined;
        })
        .addCase(register.rejected, (state, action) => {
            state.registerFormError = action.error.message;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loginFormError = undefined;
          })
        .addCase(login.rejected, (state, action) => {
            state.loginFormError = action.error.message;
          })
        .addCase(logout.fulfilled, (state) => {
          state.user = undefined;
        });
    },
  });

export const { resetLoginFormError, resetRegisterFormError } = authSlice.actions;

export default authSlice.reducer;
