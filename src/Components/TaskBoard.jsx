import React, { useState } from 'react';
import './TaskBoard.css';

function Dashboard() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: []
  });

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks({
        ...tasks,
        todo: [...tasks.todo, newTask]
      });
      setNewTask('');
    }
  };

  const moveTask = (task, from, to) => {
    setTasks({
      ...tasks,
      [from]: tasks[from].filter(t => t !== task),
      [to]: [...tasks[to], task]
    });
  };

  const deleteTask = (task) => {
    setTasks({
      ...tasks,
      completed: tasks.completed.filter(t => t !== task)
    });
  };

  return (
    <div className="task-board">
      <h1>Task Board</h1>
      <div className="new-task">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-columns">
        <div className="task-column">
          <h2>To Do</h2>
          <ul>
            {tasks.todo.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => moveTask(task, 'todo', 'inProgress')}>
                  Move to In Progress
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-column">
          <h2>In Progress</h2>
          <ul>
            {tasks.inProgress.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => moveTask(task, 'inProgress', 'completed')}>
                  Move to Completed
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-column">
          <h2>Completed</h2>
          <ul>
            {tasks.completed.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(task)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
