import { configureStore } from "@reduxjs/toolkit";
import Signup from "../Slice/Signup";


export const store = configureStore({
    reducer: {
      signup: Signup,
    },
  })
