export default class TodoAPI {
  static url = '/todo';
  static getAllTodo() {
    return fetch(this.url, {
      method: 'GET',
      Headers:{
        "Content-Type":"application/json"
      }
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));
  }
  static deleteTodo(todo_id) {
    return fetch(this.url + '/' + todo_id, {
      method: 'DELETE',
      Headers:{
        "Content-Type":"application/json"
      }
    })
      .then(res => console.log(res.body))
      .catch(err => console.log(err));
  }
  static updateTodo(body) {
    console.log(body);
    return fetch(this.url + '/' + body.todo_id + '/' + body.description,{
      method:"PATCH",
      Headers:{
        "Content-Type":"application/json"
      }
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));
  }
  static postTodo(description) {
    console.log(description);
    return fetch(this.url +'/' + description,{
      method:"put",
      Headers:{
        "Content-Type":"application/json"
      },
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
  }
}
