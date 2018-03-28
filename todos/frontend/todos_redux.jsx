import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions';
import allTodos from './reducers/selectors';
import connect from './components/todos/todo_list_container';

window.fetchTodos = fetchTodos;

window.connect = connect;

window.allTodos = allTodos;

const store = configureStore;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
  const contentEl = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, contentEl);
});
