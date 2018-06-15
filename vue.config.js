module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                config: {
                    path: './postcss.config.js'
                }
            }
        }
    },
    configureWebpack: {
        performance : {
            hints : false
        }
    }
};