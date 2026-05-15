import { useState, useEffect } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('https://my-backend-c00k.onrender.com/tasks', {
      headers: { Authorization: token }
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [token]);

  function addTask() {
    if (input === '') return;
    fetch('https://my-backend-c00k.onrender.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ task: input })
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data.task]);
        setInput('');
      });
  }

  function deleteTask(taskId) {
    fetch(`https://my-backend-c00k.onrender.com/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { Authorization: token }
    })
      .then((res) => res.json())
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== taskId));
      });
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto' }}>
      <h2>My To-Do List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter a task..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={task._id}>
            {task.task}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;