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
          console.log('Login payload: ', payload);
          localStorage.setItem('user', JSON.stringify(payload.user));
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