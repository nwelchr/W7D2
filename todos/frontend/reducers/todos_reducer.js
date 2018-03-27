import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_action_types';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      // return the todos from the action
      return {
        todos: action.todos
      };
    case RECEIVE_TODO:
      const nextState = merge( {}, state, {[action.todo.id]: action.todo} );
      //nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
