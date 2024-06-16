import { configureStore } from "@reduxjs/toolkit";
import { codeSlice } from "./codeSlice";

const store = configureStore({
  reducer: {
    count: codeSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
