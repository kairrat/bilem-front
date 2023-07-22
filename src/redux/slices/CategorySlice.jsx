import { createSlice } from "@reduxjs/toolkit";
import { getFreeCourses } from "../../api/courses";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
      loading: false,
      error: null,
      category: [],
      isLogged : null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getFreeCourses.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getFreeCourses.fulfilled, (state, action) => {
          state.loading = false;
          state.isLogged = true;
          state.category = action.payload;
        })
        .addCase(getFreeCourses.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default categorySlice.reducer;