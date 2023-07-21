import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../api/register";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
      loading: false,
      error: null,
      user: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default registerSlice.reducer;