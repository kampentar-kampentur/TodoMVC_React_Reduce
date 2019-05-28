import localStorage from '../assets/js/saveState'
const storageId = 'redux'

export default (state = localStorage.restoreState(storageId), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'CHANGE_TODO_STATE':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.checked = !todo.checked;
        }
        return todo
      });
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'CHANGE_STATE_ALL_TODO':
      return state.map(todo => {
        todo.checked = action.toggleAllState
        return todo
      });
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.checked);
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.checked = !todo.checked;
        }
        return todo
      });
    default:
      return state;
  }
}
