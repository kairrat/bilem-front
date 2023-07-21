import { createSlice } from "@reduxjs/toolkit";
import { activateUser } from "../../api/auth";

const activateSlice = createSlice({
    name: 'activate',
    initialState: {
      loading: false,
      error: null,
      user: null,
      isLogged : null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(activateUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(activateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.isLogged = true;
          state.user = action.payload;
        })
        .addCase(activateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default activateSlice.reducer;