import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Title is required!");
            return;
        }
        addTodo({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" value={title} onChange={handleTitleChange} />
                <label>Description: </label>
                <input type="text" value={description} onChange={handleDescriptionChange} />
                <button className="Form-button"type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
