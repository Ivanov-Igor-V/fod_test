export const state = () => ({
  form: [],
})
export const getters = {
  formLength (state) {
    return state.form.length
  }
}
export const actions = {}
export const mutations = {
  pushCondition(state, payload) {
    state.form.push(payload)
  },
  deleteCondition(state, payload) {
    const index = state.form.findIndex((n) => n.id === payload.id)
    if (index !== -1) {
        state.form.splice(index, 1)
    }
  },
  dataContent(state, payload) {
    const index = state.form.findIndex((n) => n.id === payload.id)
      console.log(state.form[index])
      state.form[index].data = []
      state.form[index].data = payload.data
  },
  ChangeType(state,payload) {
    const index = state.form.findIndex((n) => n.id === payload.id)
    state.form[index].condType = payload.condType
    state.form[index].data = []
    console.log('clear')
  }

}
