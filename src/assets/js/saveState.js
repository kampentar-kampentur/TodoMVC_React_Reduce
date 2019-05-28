export default {
  saveState(id, todoList) {
    try {
      return localStorage.setItem(`todo-${id}`, JSON.stringify(todoList));
    } catch (e) { }
  },
  restoreState(id) {
    try {
      if (localStorage.getItem(`todo-${id}`)) return JSON.parse(localStorage.getItem(`todo-${id}`));
      return []
    } catch (e) { }
  }
}
