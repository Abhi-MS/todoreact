import React, {useState} from "react";
import Todos from "./ToDos";
import "./App.css"
import AddTodo from "./AddForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Call David", description: "By 2 pm" },
    { id: 2, title: "Order supplies", description: "Order out of stock supplies" }
  ]);
 
  const deleteTodo = (id) => {
    const deletedTodo = todos.find(todo => todo.id === id);
    deletedTodo.deleted = true;
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos([...updatedTodos, deletedTodo]);
};

  const addTodo = (todo) => {
    todo.id = Math.random();
    let updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    return updatedTodos;
}
  return (
    <div className="App-container">
    <div className="App">
      <h1 className="Title">Todo's</h1>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo}/>
    </div>
    </div>
  );
}

export default App;
