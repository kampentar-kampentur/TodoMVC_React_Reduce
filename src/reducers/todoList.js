import localStorage from '../assets/js/saveState'
const storageId = 'redux'

export default (state = localStorage.restoreState(storageId), action) => {
  let todoList, index;
  switch (action.type) {
    case 'ADD_TODO':
      todoList = [...state, action.todo]
      localStorage.saveState(storageId, todoList);
      return todoList
    case 'CHANGE_TODO_STATE':
      todoList = state.slice();
      index = todoList.findIndex(todo => todo.id === action.id);
      if (index === -1) return todoList;
      todoList[index].checked = !todoList[index].checked;
      localStorage.saveState(storageId, todoList);
      return todoList;
    case 'REMOVE_TODO':
      todoList = state.slice();
      index = todoList.findIndex(todo => todo.id === action.id);
      if (index === -1) return todoList;
      todoList.splice(index, 1);
      localStorage.saveState(storageId, todoList);
      return todoList;
    case 'CHANGE_STATE_ALL_TODO':
      todoList = state.slice();
      todoList.forEach(todo => todo.checked = action.toggleAllState);
      localStorage.saveState(storageId, todoList);
      return todoList;
    case 'CLEAR_COMPLETED':
      todoList = state.filter(todo => !todo.checked);
      localStorage.saveState(storageId, todoList);
      return todoList;
    case 'EDIT_TODO':
      todoList = state.slice();
      index = todoList.findIndex(todo => todo.id === action.id);
      todoList[index].value = action.value;
      localStorage.saveState(storageId, todoList);
      return todoList;
    default:
      return state;
  }
}
