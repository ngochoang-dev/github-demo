import React from 'react';

function Todo({ text,
    id,
    completed,
    handleDelete,
    handleComplete }) {
    return (
        <div className="list_todo">
            <p className={completed ? 'active' : ''}
                onClick={() => handleComplete(id, completed)}
            >{text}</p>
            <button
                onClick={() => handleDelete(id)}
            >Delete</button>
        </div>
    )
}

export default Todo