import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };

    console.log(props);

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    const title = e.target.value;
    this.setState({title: title});
  }

  handleBody(e) {
    const body = e.target.value;
    this.setState({body: body});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo( todo ).then(
      () => this.setState({
        title: "",
        body: "",
      })
    );
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>ZOMG make a Todo item!</span>
        <label>Title
        <input onChange={this.handleTitle} value={this.state.title}/>
        </label>
        <label>Body
        <textarea onChange={this.handleBody} value={this.state.body}></textarea>
        </label>
        <button>Todo away!!!!</button>
      </form>
    );
  }
}
