import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "be cool",
    description: "be yourself",
    importance: 5,
    finishDate: "07/06/2023",
    fixed: true,
    taskType: {
      id: "1",
      label: "Personal",
    },
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFind = state.find((task) => task.id === action.payload);
      state.splice(state.indexOf(taskFind), 1);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
