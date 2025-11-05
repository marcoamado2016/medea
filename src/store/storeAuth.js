import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import ventanaReducer from "../slice/ventanaSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    ventana: ventanaReducer,
  },
});
