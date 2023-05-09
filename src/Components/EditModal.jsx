import React, { useState } from "react";
import { Button, Box, Typography, Modal } from "@mui/material";
import "../index.css";
import {
  CustomCheckbox,
  CustomSelect,
  CustomTextField,
} from "./TemplateComponents";
import { addTask, editTask } from "../Features/Tasks/taskSlice";
import { useDispatch } from "react-redux";
import "../App.css";
import { useParams } from "react-router-dom";
import { EditOutlined } from "@mui/icons-material";

export function MyButton({ handleOpen }) {
  return <EditOutlined onClick={handleOpen}>Abrir modal</EditOutlined>;
}

export function MyModal({ open, handleClose, values }) {
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
    id: values.id,
    title: values.title,
    description: values.description,
    importance: values.importance,
    fixed: values.fixed,
    finishDate: values.finishDate,
    taskType: values.taskType.label,
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
  };

  const handleEdit = () => {
    dispatch(editTask(userData));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
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
            value={userData.taskType.label || ""}
            onChange={handleInputChange}
            options={taskType}
          />

          <Button
            type="submit"
            variant="outlined"
            className="custom-input col-start-2 col-end-8 justify-self-center"
            onClick={handleEdit}
          >
            Edit Task
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
