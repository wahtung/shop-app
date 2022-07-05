
// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions

module.exports = {
    devServer: {
        port: 18080 //修改默认端口
        //proxy: 'http://localhost:18080' //指向开发环境API服务器

        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:18080',
        //         changeOrigin: true
        //     }
        // }
    }
}