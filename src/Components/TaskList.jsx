import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../Features/Tasks/taskSlice";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <div>
      <h1>TaskList</h1>
      <TableContainer component={Paper} className="mx-10">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fixed</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Importance</TableCell>
              <TableCell>FinishDate</TableCell>
              <TableCell>TaskType</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.fixed}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.importance}</TableCell>
                <TableCell>{task.finishDate}</TableCell>
                <TableCell>{task.taskType.label}</TableCell>
                <TableCell>
                  <DeleteOutline onClick={() => handleDelete(task.id)} />
                  <EditOutlined />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TaskList;
