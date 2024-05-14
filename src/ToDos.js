import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="To-do-card" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                    <h2 className="To-do-title">{todo.title}</h2>
                    <p className="To-do-description">{todo.description}</p>
                </div>
            )
        })
    ) : (
        
        <p>You have no todo's left</p>
    ) 
    return(
        <div className="todos">
        {todoList}
        </div>
    )
}

export default Todos;