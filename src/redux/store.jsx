import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/GeneralSlice";
export const store = configureStore({
    reducer: {
        [generalSlice.name]: generalSlice.reducer,



    }
});