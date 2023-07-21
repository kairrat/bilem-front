import { createAsyncThunk } from "@reduxjs/toolkit";
import { API} from "./api";


  export const getFreeCourses = createAsyncThunk('courses/getFree', async (params) => {

    const url = '/course' + (params ? `?${new URLSearchParams(params).toString()}` : '');

    const response = await API.get(url);
    return response.data;
  });