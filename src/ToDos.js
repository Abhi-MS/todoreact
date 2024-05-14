import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const strikeThroughStyle = {
        textDecoration: 'line-through'
    };
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="To-do-card" key={todo.id} style={todo.deleted ? strikeThroughStyle : null}>
                    <input type="checkbox" onClick={() => {deleteTodo(todo.id)}} />
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