export const state = () => ({
  conditions: [],
})
export const getters = {
  formLength (state) {
    return state.conditions.length
  }
}
export const actions = {}
export const mutations = {
  pushCondition(state, payload) {
    state.conditions.push(payload)
  },
  deleteCondition(state, payload) {
    const index = state.conditions.findIndex((n) => n.id === payload.id)
    if (index !== -1) {
        state.conditions.splice(index, 1)
    }
  },
  dataContent(state, payload) {
    const index = state.conditions.findIndex((n) => n.id === payload.id)
      state.conditions[index].data = []
      state.conditions[index].data = payload.data
  },
  ChangeType(state,payload) {
    const index = state.conditions.findIndex((n) => n.id === payload.id)
    state.conditions[index].condType = payload.condType
    state.conditions[index].data = []
  }

}
