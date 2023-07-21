import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordAsync } from "../../api/auth";

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: {
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(resetPasswordAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(resetPasswordAsync.fulfilled, (state, action) => {
          state.loading = false;
          
        })
        .addCase(resetPasswordAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default resetPasswordSlice.reducer;