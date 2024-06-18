import { configureStore } from "@reduxjs/toolkit";
import Bigflix from "./MovieSlice";

 const store=configureStore({
    reducer:{
        Bigflix
    },
})
export default store;
