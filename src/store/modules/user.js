import router from '@/router'
import { cloneDeep } from 'lodash'
// import { login } from '@/api/login.js'
const state = () => ({
    userInfo: null,
})
const mutations = {
    CHANG_UESRINFO: (state, info) => {
        state.userInfo = cloneDeep(info)
    },
}

const actions = {
    async login({ commit }, userInfo) {
        // try {
        //     const res = await login(userInfo)
        //     console.log('store', res)
        //     commit('CHANG_UESRINFO', res.data)
        //     return res
        // } catch (error) {
        //     console.log('112212121', error)
        //     return false
        // }
    },
    logout({ commit }) {
        commit('CHANG_UESRINFO', null)
        router.replace({
            name: 'Login',
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
