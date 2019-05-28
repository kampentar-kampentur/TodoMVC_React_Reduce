import React, { Component } from 'react';
import { connect } from 'react-redux'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.props.todoCounter}</strong> items left</span>
        <ul className="filters">
          <li>
            <a href="#/" className={this.props.todoAppStore.todoFilter === 'all' ? 'selected' : ''} onClick={() => this.filter('all')}>All</a>
          </li>
          <li>
            <a href="#/active" className={this.props.todoAppStore.todoFilter === 'active' ? 'selected' : ''} onClick={() => this.filter('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={this.props.todoAppStore.todoFilter === 'completed' ? 'selected' : ''} onClick={() => this.filter('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.props.onClearCompleted}>Clear completed</button>
      </footer>
    );
  }
  filter = (filter) => {
    this.props.changeFilter(filter);
  }
}

export default connect(
  state => ({
    todoAppStore: state
  }),
  dispatch => ({
    onClearCompleted(e) {
      dispatch({ type: 'CLEAR_COMPLETED' })
    },
    changeFilter(filter) {
      dispatch({ type: 'SWITCH_FILTER', filter })
    }
  })
)(Footer);
