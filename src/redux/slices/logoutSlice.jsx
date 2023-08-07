import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
      loading: false,
      isLogged: localStorage.getItem('user') ? true : false,
      user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
      status: 'active',
      error: null
    },
    reducers: {
        setLogout: (state) => {
            state.isLogged = false;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
   
    },
  });
  export const {setLogout,isLogged} = logoutSlice.actions;

  
  export default logoutSlice.reducer;