import { configureStore } from "@reduxjs/toolkit";
import  userslice  from "./fetchslice";
const store = configureStore({
    reducer:{
        items:userslice,
    },
});
export default store;