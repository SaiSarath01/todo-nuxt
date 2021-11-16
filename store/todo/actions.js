export default {
  async getAllUser({ commit }) {
    const response = await axios.get('/users', {
      'content-type': 'application/json',
    })
    console.log(response)
    commit('setAllUsers', response.data)
  },
}
