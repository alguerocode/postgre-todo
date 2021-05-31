
import TodoAPI from '../api/todo';

const Create = ({ text, setText, setTodos, todos, setUpdate, idToUpdate, setId, isUpdating }) => {

  const createHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('the description not allowed');
      return;
    }
    if (isUpdating) {
      TodoAPI.updateTodo({
        description:text,
        todo_id:idToUpdate
      })
        .then(data => {
          setTodos(todos.map(todo =>{
            if(todo.todo_id === idToUpdate) {
              return data[0];
            }
            return todo
          }))
        })
    } else {
      TodoAPI.postTodo(text)
        .then(data => {
          const newTodos = [...todos, data[0]];
          setTodos(newTodos);
        })
        .catch(err => console.log(err));
    }
    cleanUpText();
  }
  const cleanUpText = () => {
    setText('');
    setId(null);
    setUpdate(false);
  }
  return (
    <form>
      <h2>create new todo</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={(e) => createHandler(e, text)}>{isUpdating ? 'update' : 'create'}</button>
    </form>
  );
}

export default Create;