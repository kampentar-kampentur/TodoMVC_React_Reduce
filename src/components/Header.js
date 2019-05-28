import React, { Component } from 'react';
import { connect } from 'react-redux'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onToggleAll = (e) => {
    this.props.onToggleAll(this.props.stateToggleAll);
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" onKeyUp={this.props.addTodo} onBlur={this.props.addTodo} autoFocus />
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={this.props.stateToggleAll} onChange={this.props.onToggleAll} />
        <label htmlFor="toggle-all" style={{ display: this.props.showToggleAll ? 'block' : 'none' }} >Mark all as complete</label>
      </header>
    );
  }
}

export default connect(
  state => ({
    todoAppStore: state
  }),
  dispatch => ({
    addTodo(e) {
      if (typeof e.keyCode !== 'undefined' && e.keyCode !== 13) return;
      if (e.target.value === '') return
      dispatch({ type: 'ADD_TODO', todo: { value: e.target.value, checked: false, id: new Date().getTime() } })
      e.target.value = ''
    },
    onToggleAll(e) {
      dispatch({ type: 'CHANGE_STATE_ALL_TODO', toggleAllState: e.target.checked })
    }
  })
)(Header);
