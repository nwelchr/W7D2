import { RECEIVE_TODOS, RECEIVE_TODO } from './todo_action_types';
import * as APIUtil from '../util/todo_api_util';

const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos: todos
  });

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

const fetchTodos = () => {
  return (dispatch) => {
    APIUtil.fetchTodos().then(
      dispatch(todos => receiveTodos(todos))
    );
  };
};

const createTodo = (todo) => {
  return (dispatch) => {
    APIUtil.createTodo(todo).then(todoitem =>
      dispatch(receiveTodo(todoitem))
    );
  };
};

export { receiveTodo, receiveTodos, fetchTodos, createTodo };
