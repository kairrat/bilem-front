import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authorizationToken = `Bearer ${localStorage.getItem('token')}`.replace(/"/g, '');


export const profile = createAsyncThunk('user/profile', async () => {
  try {
    const response = await axios.get('http://46.101.157.222:3000/api/users/me/', {
      headers: {
        Authorization: authorizationToken,
      },
    });

    console.log(response.data, 'profile request');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
});