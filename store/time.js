export const state = () => ({
  time: new Date(),
})

export const mutations = {
  getTime(state) {
    return state.time
  },
  setTime(state, newTime) {
    state.time = newTime
  },
}
