import { createAsyncThunk } from "@reduxjs/toolkit";
import { API} from "./api";


  export const login = createAsyncThunk('user/login', async (data) => {
    const response = await API.post('auth/sign-in/', data);
    console.log(response.data)
    return response.data;
  });

  export const registerUser = createAsyncThunk(
    'user/register',
    async (data, { rejectWithValue }) => {
      try {
        const response = await API.post('/auth/sign-up', data);
        console.log(response.data)

        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const resetAsync = createAsyncThunk(
    'user/reset',
    async (data, { rejectWithValue }) => {
      try {
        const response = await API.post('/auth/forgot-password', data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const resetCodeAsync = createAsyncThunk(
    'user/resetCode',
    async (data, { rejectWithValue }) => {
      try {
        console.log('this is my data' , data)
        const response = await API.post('/auth/verify-password', data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const resetPasswordAsync = createAsyncThunk(
    'user/resetPassword',
    async (data, { rejectWithValue }) => {
      try {
        console.log('this is change password data' , data)
        const response = await API.post(`/auth/change-password/${localStorage.getItem('email')}`, data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const activateUser = createAsyncThunk(
    'user/activate',
    async (data, { rejectWithValue }) => {
      try {
        const response = await API.post('/auth/activate', data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );