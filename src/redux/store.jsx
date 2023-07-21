import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/GeneralSlice";
import registerReducer from "./slices/RegisterSlice";
import loginReducer from './slices/LoginSlice';
import activateReducer from "./slices/activateSlice";
import resetReducer from "./slices/resetSlice";
import resetCodeReducer from "./slices/resetCodeSlice";
import resetPasswordReducer from "./slices/resetPasswordSlice";
import freeCoursesReducer from './slices/getFreeCoursesSlice'


export const store = configureStore({
    reducer: {
        [generalSlice.name]: generalSlice.reducer,
        register : registerReducer,
        login: loginReducer,
        activate : activateReducer,
        reset : resetReducer,
        resetCode : resetCodeReducer,
        resetPassword : resetPasswordReducer,
        getFreeCourses : freeCoursesReducer,

    }
});