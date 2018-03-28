export const fetchTodos = () => (
  $.ajax({
  method: 'GET',
  url: '/api/todos'
 }).then(
  todo => console.log(todo),
  error => console.log(error)
));

export const createTodo = todo => (
 $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
);
