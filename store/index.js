export const state = () => ({
  drawer: false
})

export const mutations = {
  FLIP(state) {
    state.drawer = !state.drawer
  },
}