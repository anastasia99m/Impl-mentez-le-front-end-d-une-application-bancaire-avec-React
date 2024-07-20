import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userAction"

const store = configureStore({
  reducer: {
    USER: userSlice.reducer,
  },
});
export default store