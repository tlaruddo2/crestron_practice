import { configureStore } from "@reduxjs/toolkit";
import volumeReducer from "./volumneSlice";

export const store = configureStore({
  reducer: {
    volume: volumeReducer,
  },
});
