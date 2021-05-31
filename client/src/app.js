import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Create from './components/form';
import Log from './components/log';
import TodoAPI from './api/todo';
const App = () => {
  const [isUpdating, setUpdate] = useState(false);
  const [idToUpdate, setId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    TodoAPI.getAllTodo()
      .then(todos => setTodos(todos));
  }, []);
  return (
    <div className="app">
      <h1>welcome to todo list</h1>
      <Create todos={todos} setTodos={setTodos} setUpdate={setUpdate} idToUpdate={idToUpdate} setId={setId} isUpdating={isUpdating} text={text} setText={setText} />
      <Log todos={todos} setTodos={setTodos} setUpdate={setUpdate} setId={setId} setText={setText} />
    </div>
  );
}

export default App;