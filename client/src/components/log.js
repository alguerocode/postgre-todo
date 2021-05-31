import React from 'react';
import TodoAPI from '../api/todo';
const Log = ({ todos, setTodos,setId,setUpdate,setText }) => {
  const deleteHandler = (todo_id) => {
    TodoAPI.deleteTodo(todo_id)
      .then(() => setTodos(todos.filter(todo => todo_id !== todo.todo_id)))
      .catch(err => console.log(err));
  }
  const editHanlder = (todo) => {
    setText(todo.description);
    setId(todo.todo_id);
    setUpdate(true);
  }
  return (
    <div className="log">
      <h2>all todo</h2>
      {todos && todos.map(todo => (
        <div className="todo" key={todo.todo_id}>
          <h2>{todo.description}</h2>
          <button onClick={deleteHandler.bind(null, todo.todo_id)}>delete</button>
          <button onClick={editHanlder.bind(null, todo)}>edit</button>
        </div>
      ))}
    </div>
  );
}

export default Log;