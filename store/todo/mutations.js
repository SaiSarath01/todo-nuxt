export default {
  addTodo(state, text) {
    state.todos.push({
      id: Date.now(),
      text,
    })
  },
  setAllUsers(state, usersList) {
    state.users = [...usersList]
  },
}
