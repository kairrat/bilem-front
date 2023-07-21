import { createSlice } from "@reduxjs/toolkit";
import { getFreeCourses } from "../../api/courses";

const freeCoursesSlice = createSlice({
    name: 'freeCourses',
    initialState: {
      loading: false,
      error: null,
      courses: [],
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
          state.courses = action.payload;
        })
        .addCase(getFreeCourses.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default freeCoursesSlice.reducer;