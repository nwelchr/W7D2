import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {receiveTodo, receiveTodos } from './actions/todo_actions';
import allTodos from './reducers/selectors';
import connect from './components/todos/todo_list_container.jsx';

window.connect = connect;

window.allTodos = allTodos;

const store = configureStore;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
