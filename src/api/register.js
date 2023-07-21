import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./api";

export const registerUser = createAsyncThunk(
    'user/registerUser',
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