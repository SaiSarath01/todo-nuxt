export default {
  addTodo(state, text) {
    console.log(text)
    state.todos.push({
      id: Date.now(),
      text,
    })
    console.log(state.todos)
  },
}
