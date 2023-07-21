import { createAsyncThunk } from "@reduxjs/toolkit";
import { API} from "./api";
import jwt_decode from 'jwt-decode'


  export const login = createAsyncThunk('login/login', async (data) => {
    const response = await API.post('auth/sign-in/', data);
    console.log(response.data)
    return response.data;
  });