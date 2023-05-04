import { useSelector } from "react-redux";
import "./App.css";
import UserForm from "./Components/UserForm";

function App() {

  const taskState = useSelector(state => state.tasks)

  return (
    <div className="App">
        <UserForm></UserForm>
    </div>
  );
}

export default App;
