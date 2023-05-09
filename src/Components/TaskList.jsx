import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../Features/Tasks/taskSlice";
import { DeleteOutline, Favorite, FavoriteBorder } from "@mui/icons-material";
import { MyButton, MyModal } from "./EditModal";
import { Card } from "antd";
import "../App.css";

const { Meta } = Card;

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (task) => {
    dispatch(editTask(task));
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="mx-16 my-10 grid grid-cols-4 grid-flow-row">
        {tasks.map((task) => (
          <Card
            key={task.id}
            className="shadow-card my-5"
            style={{ width: 200 }}
            actions={[
              task.fixed ? (
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  defaultChecked
                  disabled
                />
              ) : (
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  disabled
                />
              ),
              <DeleteOutline onClick={() => handleDelete(task.id)} />,
              <MyButton handleOpen={handleOpen} handleEdit={task} />,
            ]}
          >
            <Meta
              avatar={task.importance}
              title={task.title}
              description={
                <div>
                  {task.description}
                  <br />
                  FD: {task.finishDate}
                </div>
              }
            />
            <MyModal open={open} handleClose={handleClose} values={task} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
