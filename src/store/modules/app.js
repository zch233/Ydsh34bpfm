const state = () => ({
    sidebar: {
        opened: true,
    },
    size: 'medium',
})
const mutations = {
    TOGGLE_SIDEBAR: (state) => {
        state.sidebar.opened = !state.sidebar.opened
    },
    SET_SIZE: (state, size) => {
        state.size = size
    },
}
const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    setSize({ commit }, size) {
        commit('SET_SIZE', size)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
