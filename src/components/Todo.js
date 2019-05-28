import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false, checked: this.props.todo.checked }
    this.editInput = null;
  }
  componentDidUpdate() {
    if (!this.isEditing) {
      this.editInput.focus();
    }
  }
  setEditInput = (e) => {
    this.editInput = e
  }
  onEditing = (e) => {
    this.setState({ isEditing: true })
    this.editInput.value = this.props.todo.value;
  }
  doneInputTodo = (e) => {
    if (typeof e.keyCode !== 'undefined' && e.keyCode !== 13) return;
    if (e.target.value === '') {
      this.props.removeTodo(this.props.todo.id)
      return
    }
    this.props.editTodo(this.props.todo.id, e.target.value)
    this.setState({ isEditing: false })
  }
  render() {
    let className = ''
    if (this.props.todo.checked) {
      className = 'completed'
    }
    if (this.state.isEditing) {
      className = 'editing'
    }
    return (
      <li className={className}>
        < div className="view">
          <input checked={this.props.todo.checked} onChange={() => this.props.changeTodoState(this.props.todo.id)} className="toggle" type="checkbox" />
          <label onDoubleClick={this.onEditing}>{this.props.todo.value}</label>
          <button className="destroy" onClick={() => this.props.removeTodo(this.props.todo.id)}></button>
        </div >
        <input type="text" className="edit" ref={this.setEditInput} onKeyUp={this.doneInputTodo} onBlur={this.doneInputTodo} />
      </li >
    );
  }
}

export default connect(
  state => ({
    todoAppStore: state
  }),
  dispatch => ({
    changeTodoState(id) {
      dispatch({ type: 'CHANGE_TODO_STATE', id });
    },
    removeTodo(id) {
      dispatch({ type: 'REMOVE_TODO', id });
    },
    editTodo(id, value) {
      dispatch({ type: 'EDIT_TODO', id, value });
    }
  })
)(Todo);
