import { createSlice } from "@reduxjs/toolkit";
import { resetAsync } from "../../api/auth";

const resetSlice = createSlice({
    name: 'reset',
    initialState: {
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(resetAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(resetAsync.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(resetAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default resetSlice.reducer;