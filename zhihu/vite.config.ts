

import type { UserConfig } from 'vite';
const path = require('path')


const viteConfig: UserConfig = {
    /* 端口号 */
    port:3555,

    /* hostname */
    hostname: 'localhost',

   
    /* proxy */
   
        // proxy: {
                
        //         '/api': {
        //         target: '/api',
        //         changeOrigin: true,
        //         ws:false,
        //         rewrite: path => path.replace(/^\/api/, '')
        //     }
        // }
    
};

export default viteConfig;