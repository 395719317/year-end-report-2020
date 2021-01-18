const vuePlugin = require('vue-loader/lib/plugin');
const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

new vuePlugin();
module.exports = {
    // 配置 webpack-dev-server 行为。
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',
    devServer: {
        // open: process.platform === 'darwin',
        // host: '10.3.42.60',

        port: 8088,
        https: true,
        // hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: {
            '/oa': {
                target: 'https://25y.newland.com.cn/oa', //代理接口
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/oa': ''
                }
            },
            '/adm': {
                target: 'https://25y.newland.com.cn/adm/', //代理接口
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/adm': ''
                }
            }
        }, // string | Object
        before: app => {
            // `app` 是一个 express 实例
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
    // 三方插件的选项
    pluginOptions: {
        // ...
    },
    //警告 webpack 的性能提示
    // configureWebpack : {
    //     performance: {
    //         hints:'warning',
    //         //入口起点的最大体积 整数类型（以字节为单位）
    //         maxEntrypointSize: 50000000,
    //         //生成文件的最大体积 整数类型（以字节为单位 300k）
    //         maxAssetSize: 30000000,
    //         //只给出 js 文件的性能提示
    //         assetFilter: function(assetFilename) {
    //             return assetFilename.endsWith('.js');
    //         }
    //     }
    // }
}