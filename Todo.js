import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'; // corrected icon names

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div>
            <div className='Todo'>
                <p
                    onClick={() => toggleComplete(task.id)}
                    className={`${task.completed ? 'completed' : ''}`}
                >
                    {task.task}
                </p>
                <div>
                    <FontAwesomeIcon icon={faPen} onClick={() => editTodo(task.id)} />
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
                </div>
            </div>
        </div>
    );
}