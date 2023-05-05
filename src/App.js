import { useSelector } from "react-redux";
import "./App.css";
import UserForm from "./Components/UserForm";
import TaskList from "./Components/TaskList";

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <div className="App">
      <UserForm></UserForm>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
