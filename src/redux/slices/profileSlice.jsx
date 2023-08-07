import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/auth";
import { profile } from "../../api/Profile";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      loading: false,
      error: null,
      profile : null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(profile.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(profile.fulfilled, (state, {payload}) => {
          state.loading = false;
          localStorage.setItem('profile', payload.profile)
          state.error = null;
          state.profile = payload.profile;
        })
        .addCase(profile.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default profileSlice.reducer;