const path = require('path');

module.exports = {
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             config: {
    //                 path: './postcss.config.js'
    //             }
    //         }
    //     }
    // },
    configureWebpack: {
        resolve: {
            alias: {
                // Make sure *our* version of vue is always loaded.
                // This is needed for `yarn link / npm link ag-grid-vue` to work
                vue$: path.resolve(__dirname , 'node_modules/vue/dist/vue.common.js')
            }
        },
        performance : {
            hints : false
        }
    }
};