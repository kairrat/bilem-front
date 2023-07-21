import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/GeneralSlice";
import RegisterSlice from "./slices/RegisterSlice";
import loginReducer from './slices/LoginSlice';

export const store = configureStore({
    reducer: {
        [generalSlice.name]: generalSlice.reducer,
        register : RegisterSlice,
        login: loginReducer,





    }
});