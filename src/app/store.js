import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./../Features/Tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
