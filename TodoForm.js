import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return; // Prevent adding empty tasks

        addTodo(value);
        setValue("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={value}
                placeholder='What is the task today at Centaur Digital?'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
}