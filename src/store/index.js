import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
import app from './modules/app'
import routes from './modules/routes'
import tagsView from './modules/TagsView'
import getters from './getters'
import SecureLS from 'secure-ls'
Vue.use(Vuex)
const ls = new SecureLS({ isCompression: false })

const debug = process.env.NODE_ENV !== 'production'

const cpsOption = {
    paths: ['user.userInfo', 'routes.menuList', 'app.sidebar'],
    key: process.env.VUE_APP_VUEX_PERSISTED_KEY,
    storage: window.sessionStorage,
}
if (!debug) {
    cpsOption.storage = {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
    }
}
const createPersisted = createPersistedState(cpsOption)
export default new Vuex.Store({
    modules: {
        user,
        app,
        routes,
        tagsView,
    },
    getters,
    strict: debug,
    plugins: debug ? [createLogger(), createPersisted] : [createPersisted],
})
