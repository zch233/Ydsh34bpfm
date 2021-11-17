import { get } from 'lodash'
const getters = {
    token: (state) => get(state, 'user.userInfo.token', ''),
    sidebar: (state) => state.app.sidebar,
    menuList: (state) => state.routes.menuList,
    hasRoute: (state) => state.routes.hasRoute,
    visitedViews: (state) => state.tagsView.visitedViews,
    cachedViews: (state) => state.tagsView.cachedViews,
}
export default getters
