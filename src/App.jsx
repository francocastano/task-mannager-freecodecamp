import './App.css';
import React from 'react';
import Logo from './component/logo';
import TaskList from './component/taskList';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="task-list">
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
