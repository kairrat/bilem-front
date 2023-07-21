import { createSlice } from "@reduxjs/toolkit";
import { resetCodeAsync } from "../../api/auth";

const resetCodeSlice = createSlice({
    name: 'resetCode',
    initialState: {
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(resetCodeAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(resetCodeAsync.fulfilled, (state, action) => {
          state.loading = false;
          
        })
        .addCase(resetCodeAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default resetCodeSlice.reducer;