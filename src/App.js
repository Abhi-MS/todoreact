import React, {useState} from "react";
import Todos from "./ToDos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Call David" },
    { id: 2, content: "Order supplies" }
  ]);
  return (
    <div className="App">
      <h1 className="Title">Todo's</h1>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
