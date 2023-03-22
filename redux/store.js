import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { UserApi } from "./reducers/user";


export default configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(UserApi.middleware)
})