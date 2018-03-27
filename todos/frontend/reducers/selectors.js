const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  return keys.map( (todoId) => state.todos[todoId] );
};

export default allTodos;
