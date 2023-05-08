import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Be cool",
    description: "Be yourself",
    importance: 5,
    finishDate: "Tomorrow",
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
    editTask: (state, action) => {
      const {
        id,
        title,
        description,
        importance,
        finishDate,
        fixed,
        taskType,
      } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      console.log(foundTask);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
        foundTask.importance = importance;
        foundTask.finishDate = finishDate;
        foundTask.fixed = fixed;
        foundTask.taskType.label = taskType;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
