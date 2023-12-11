import React from 'react';

const Task = ( {id, title, completed, removeTask, toggleTask} ) => {
    return (
        <li className='list-group-item px-4'>
            <label className='w-50'> {title} </label>
            <input className='w-25' type='checkbox' checked={ completed }
            onChange={(e) => toggleTask(id, e.target.checked)} />
            <button className='btn btn-danger w-25' onClick={() => removeTask(id)}>Delete</button>
        </li>
    );
}

export default Task;