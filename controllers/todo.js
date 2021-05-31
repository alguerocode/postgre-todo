const pool = require("../database");



const post = async (req, res) => {
  try {
    console.log(req.params);
    const {description} = req.params;
    const newTodo = await pool.query("INSERT INTO todo (todo_id,description) VALUES (uuid_generate_v4(),$1) RETURNING * ", [description]);
    console.log(newTodo.rows);
    res.json(newTodo.rows);
  } catch (err) {
    console.log(err);
  }
}
const get = async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
}

const patch = async (req, res) => {
  try {
    console.log(req.body);
    const { description, id } = req.params;
    const newUpdatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING * ", [description, id]);
    res.json(newUpdatedTodo.rows);
  } catch (err) {
    console.log(err.message);
  }
}
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM todo WHERE todo_id =$1', [id]);
    res.send('todo deleted');
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  post,
  get,
  deleteTodo,
  patch
}













