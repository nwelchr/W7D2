import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    console.log(props);
  }
  //
  // linkState(key) {
  //   // here we use '[key]' to set the key to be the value of the 'key' variable,
  //   // as opposed to a string of 'key'
  //   return (event => this.setState({[key]: event.currentTarget.value}));
  // }

  handleInput(e) {
    const input = e.target.value;
    this.setState({input: input});
  }

  handleSubmit() {
    //this.props.receiveTodo;
  }

  render () {
    return (
      <div>
        <span>Create a new Todo item!</span>
        <input onChange={() => this.handleInput()} value={this.state.input}/>
        <button onClick={() => this.handleSubmit()}>Add your Todo!</button>
      </div>
    );
  }
}
