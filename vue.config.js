const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
const prodPlugins = []

if (process.env.NODE_ENV !== 'development') {
    prodPlugins.push(
        new CompressionPlugin({
            algorithm: 'gzip', //开启gzip
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
        })
        // new LodashModuleReplacementPlugin() //优化lodash
    )
    if (process.env.VUE_APP_RUN_Bundle_Analyzer_Plugin) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
        prodPlugins.push(
            new BundleAnalyzerPlugin({
                analyzerPort: 'auto',
            }) //打包后文件大小概览
        )
    }
}
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    lintOnSave: 'error',
    chainWebpack: (config) => {
        config.module.rule('svg').exclude.add(resolve('src/assets/svg')).end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
        config.optimization.delete('splitChunks')
        config.plugin('module-federation-plugin').use(require('webpack').container.ModuleFederationPlugin, [
            {
                name: 'comApp',
                filename: 'remoteEntry.js',
                exposes: {
                    './TestModel': './packages/test-model/index.vue',
                },
            },
        ])
    },
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            fallback: {
                path: require.resolve('path-browserify'),
            },
            alias: {
                '@': resolve('src'),
            },
        },
        plugins: [...prodPlugins],
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: {
                        // 直接覆盖变量
                        // 'text-color': '#111',
                        // 'border-color': '#eee',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "${path.join(__dirname, './src/assets/styles/elTheme/index.less')}";`,
                    },
                },
            },
        },
    },
    devServer: {
        port: 10087,
        hot: true,
        host: '0.0.0.0',
        allowedHosts: ['.group-ds.com'],
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
})
