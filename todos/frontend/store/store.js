import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk.js';

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;


// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import thunkMiddleware from '../middleware/thunk_middleware';
//
//
// const configureStore = (preloadedState = {}) => {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunkMiddleware)
//   );
// }
//
// export default configureStore;
