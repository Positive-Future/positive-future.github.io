export const state = () => ({
  offsetTop: 0,
  tab: '',
  scrolling: false,
  contactOnly: false,
})
export const mutations = {
  setContactOnly(state, val) {
    state.contactOnly = val
  },
  setOffsetTop(state, offset) {
    state.offsetTop = offset
  },
  setTab(state, tab) {
    if (tab !== undefined) {
      state.tab = tab
      if (tab === 1) state.contactOnly = false
      if (tab === 3) state.contactOnly = true
    }
  },
  lockScrolling(state) {
    state.scrolling = true
  },
  unlockScrolling(state) {
    state.scrolling = false
  },
}
