import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddTask = ( { addNewTask } ) => {
    const [task, setTask] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length === 0) return;
    addNewTask(task);
    setTask("");
}

    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group mb-3">
                <input type="text" className="form-control" value={task} onChange={ (e) => setTask(e.target.value) } />
            </div>
            <button type="submit" className="btn btn-primary w-25">Add</button>
        </form>
    );
}

export default AddTask;