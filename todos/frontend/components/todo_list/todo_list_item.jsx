import React from 'react';

const TodoListItem = ( { todolistId, title } ) => (
  <li>{todolistId}{title}</li>
);

export default TodoListItem;
