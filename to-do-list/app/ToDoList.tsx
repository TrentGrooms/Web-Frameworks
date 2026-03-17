"use client";

import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event: { target: { value: React.SetStateAction<string>; }; }) {
      setNewTask(event.target.value);
    }

    function addTask() {
      if (newTask.trim() !== '') {
        setTasks(t =>[...tasks, newTask]);
        setNewTask('');



      }
      
    }

    function deleteTask(index: number) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }

    function moveTaskUp(index: number) {
      if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
    }

    function moveTaskDown(index: number) {
      if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
    }

    return (
    <div className='to-do-list'>
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task-text'>{task}</span>\
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>);
}


export default ToDoList;