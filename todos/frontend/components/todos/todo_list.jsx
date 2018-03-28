import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.createTodo);
    return (
      <div>
      <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}/>
      <ul>
        {this.props.todos.map( (todo, idx) => <TodoListItem key={idx} title={todo.title} /> )}
      </ul>
    </div>
    );
  }
}
