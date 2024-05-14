import React, {useState} from "react";
import Todos from "./ToDos";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Call David", description: "By 2 pm" },
    { id: 2, title: "Order supplies", description: "Order out of stock supplies" }
  ]);
  const deleteTodo =(id) => {
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="App-container">
    <div className="App">
      <h1 className="Title">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
    </div>
    </div>
  );
}

export default App;
