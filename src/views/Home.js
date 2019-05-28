import React, { Component } from 'react';
import Header from '../components/Header';
import Todo from '../components/Todo'
import Footer from '../components/Footer'
import '../assets/styles/index.css';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  todoFilter = (filter) => {
    switch (filter) {
      case 'active':
        return this.props.todoAppStore.todoList.filter(todo => !todo.checked)
      case 'completed':
        return this.props.todoAppStore.todoList.filter(todo => todo.checked)
      default:
        return this.props.todoAppStore.todoList
    }
  }
  todoCounter = () => {
    return this.props.todoAppStore.todoList.filter(todo => !todo.checked).length
  }
  allCompleted = () => {
    return this.props.todoAppStore.todoList.filter(todo => todo.checked).length === this.props.todoAppStore.todoList.length
  }
  render() {
    return (
      <>
        <section className="todoapp">
          <Header stateToggleAll={this.allCompleted()} showToggleAll={!!this.props.todoAppStore.todoList.length} onToggleAll={this.changeStateAllTodo} />
          <section className="main">
            <ul className="todo-list">
              {this.todoFilter(this.props.todoAppStore.todoFilter).map(todo => (
                <Todo todo={todo} key={todo.id} />
              ))}
            </ul>
          </section>
          {(() => {
            if (this.props.todoAppStore.todoList.length) {
              return <Footer todoCounter={this.todoCounter()} />
            }
          })()}
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a>
          </p>
          <p>
            Refactored by
            <a href="https://github.com/cburgmer">Christoph Burgmer</a>
          </p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </>
    )
  }
}

export default connect(
  state => ({
    todoAppStore: state
  }),
  dispatch => ({

  })
)(Home);
