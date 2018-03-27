import { RECEIVE_TODOS, RECEIVE_TODO } from './todo_action_types';

const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos: todos
  });

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export { receiveTodo, receiveTodos };
