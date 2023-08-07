import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
      loading: false,
      error: null,
      user : null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, {payload}) => {
          state.loading = false;
          localStorage.setItem('userID', JSON.stringify(payload.user.id));
          localStorage.setItem('user', JSON.stringify(payload.user));

          localStorage.setItem('token', JSON.stringify(payload.accessToken));
          localStorage.setItem('refresh', JSON.stringify(payload.refreshToken));
          state.error = null;
          state.user = payload.user;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default loginSlice.reducer;