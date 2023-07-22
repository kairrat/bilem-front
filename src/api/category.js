import { createAsyncThunk } from "@reduxjs/toolkit";
import { API} from "./api";


  export const getCategory = createAsyncThunk('category/getCategory', async (params) => {

    const url = '/category/flat' + (params ? `?${new URLSearchParams(params).toString()}` : '');

    const response = await API.get(url);
    console.log(response.data, ' category')
    return response.data;
  });