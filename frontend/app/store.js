import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import list from "./ListId.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    list: list,
  },
});
