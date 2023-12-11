import React, { useState, useEffect } from 'react';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";

function App() {
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("TASKS"))
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(taskList))
  }, [taskList])
  
  const addNewTask = (title) => {
    setTaskList([...taskList, {id: uuid(), title, completed: false}])
  }

  const removeTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const toggleTask = (id, completed) => {
    setTaskList(taskList.map((task) => {
      if (task.id === id) {
        return {...task, completed}
      } else {
     return task}
    }))
  }

  return (
    <div className="w-50 mx-auto my-4 p-4 bg-light border border-light-50">
      <AddTask addNewTask={ addNewTask } />
      {
        taskList.length === 0 ?
          <p className='mt-4'>No tasks scheduled</p> :
          <TaskList taskList={ taskList } removeTask={ removeTask } toggleTask={toggleTask } />
     }
    </div>
  );
}

export default App;
