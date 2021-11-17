import SvgIcon from './index.vue'
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)
export default (app) => {
    app.component('svg-icon', SvgIcon)
}
