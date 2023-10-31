import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkMode/darkModeSlice";


export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;