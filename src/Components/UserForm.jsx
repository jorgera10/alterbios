import React, { useState } from "react";
import "../index.css";
import {
  CustomCheckbox,
  CustomSelect,
  CustomTextField,
} from "./TemplateComponents";
import { Button } from "@mui/material";

function UserForm() {
  const taskType = [
    {
      id: 1,
      label: "Staff",
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

  const [userData, setUserData] = useState({
    title: "",
    description: "",
    importance: 0,
    fixed: false,
    finishDate: "--/--/----",
    taskType: {
      id: 0,
      label: "",
    },
  });

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
  };

  return (
    <form
      className="grid grid-cols-8 gap-6 mx-52 my-10"
      onSubmit={handleSubmit}
    >
      <CustomTextField
        className="col-span-4"
        label="Title"
        name="title"
        type="text"
        value={userData.title}
        onChange={handleInputChange}
      />
      <CustomTextField
        className="col-span-4"
        label="Description"
        name="description"
        type="text"
        value={userData.description}
        onChange={handleInputChange}
      />

      <CustomTextField
        className="col-span-4"
        label="Importance"
        type="number"
        name="importance"
        value={userData.importance}
        onChange={handleInputChange}
      />

      <CustomTextField
        className="col-span-4"
        label="Finish Date"
        type="date"
        name="finishDate"
        value={userData.finishDate}
        onChange={handleInputChange}
      />

      <CustomCheckbox
        className="col-span-4"
        name="fixed"
        checked={userData.fixed}
        onChange={handleInputChange}
        label="Fixed"
      />

      <CustomSelect
        className="col-span-4"
        label="Civil Status"
        name="taskType"
        value={userData.taskType.label}
        onChange={handleInputChange}
        options={taskType}
      />

      <Button type="submit" variant="outlined" className="col-span-8">
        Submit
      </Button>
    </form>
  );
}

export default UserForm;
