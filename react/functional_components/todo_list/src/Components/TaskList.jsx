import React from 'react';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ( { taskList, removeTask, toggleTask } ) => {
    return (
        <ul className='list-group mt-4'>
            {
                taskList.map( (task) => {
                  return  <Task key={task.id} {...task} removeTask={ removeTask } toggleTask={toggleTask } />
                } )
            }
        </ul>
    );
}

export default TaskList;