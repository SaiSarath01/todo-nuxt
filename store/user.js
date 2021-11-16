export const state = () => ({
  users: [],
})

export const mutations = {
  setAllUsers(state, usersList) {
    state.users = [...usersList]
  },
}

export const actions = {
  async getAllUsers({ commit }) {
    const response = await this.$axios.get('/users', {
      'content-type': 'application/json',
    })
    commit('setAllUsers', response.data)
  },
}
