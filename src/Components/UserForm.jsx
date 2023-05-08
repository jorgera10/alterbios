import React, { useState } from "react";
import "../index.css";
import {
  CustomCheckbox,
  CustomSelect,
  CustomTextField,
} from "./TemplateComponents";
import { Button } from "@mui/material";
import { addTask } from "../Features/Tasks/taskSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "../App.css";

function UserForm(task) {
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();
  const taskType = [
    {
      id: 1,
      label: "Personal",
    },
    {
      id: 2,
      label: "Job",
    },
    {
      id: 3,
      label: "School",
    },
  ];

  const initialState = {
    title: "",
    description: "",
    importance: 0,
    fixed: false,
    finishDate: today,
    taskType: {
      id: 0,
      label: "",
    },
  };

  const [userData, setUserData] = useState(initialState);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "taskType") {
      const selectedOption = taskType.find(
        (option) => option.label === target.value
      );

      setUserData({
        ...userData,
        taskType: {
          id: selectedOption.id,
          label: selectedOption.label,
        },
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(addTask({ ...userData, id: uuid() }));
    setUserData(initialState);
  };

  return (
    <form
      className="grid grid-cols-8 gap-6 mx-52 my-10"
      onSubmit={handleSubmit}
    >
      <CustomTextField
        label="Title"
        name="title"
        type="text"
        value={userData.title}
        onChange={handleInputChange}
        min=""
      />
      <CustomTextField
        label="Description"
        name="description"
        type="text"
        value={userData.description}
        onChange={handleInputChange}
        min=""
      />

      <CustomTextField
        label="Importance"
        type="number"
        name="importance"
        value={userData.importance}
        onChange={handleInputChange}
        min={0}
      />

      <CustomTextField
        label="Finish Date"
        type="date"
        min={today}
        name="finishDate"
        value={userData.finishDate}
        onChange={handleInputChange}
      />

      <CustomCheckbox
        name="fixed"
        checked={userData.fixed}
        onChange={handleInputChange}
        label="Fixed"
      />

      <CustomSelect
        label="Task Type "
        name="taskType"
        value={userData.taskType.label}
        onChange={handleInputChange}
        options={taskType}
      />

      <Button
        type="submit"
        variant="outlined"
        className="custom-input col-start-2 col-end-8 justify-self-center"
      >
        Add Task
      </Button>
    </form>
  );
}

export default UserForm;
