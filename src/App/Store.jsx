import { configureStore } from "@reduxjs/toolkit";
import Bigflix from "./MovieSlice";

 const store=configureStore({
    reducer:{
        Bigflix
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Disable the serializable state invariant middleware
          //This middleware is useful for catching common bugs related to state serialization 
          //but can slow down your application if your state or actions are very large or complex.
        })
})
export default store;
