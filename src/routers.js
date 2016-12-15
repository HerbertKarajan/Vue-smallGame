/**
 * 
 * @authors Karajan
 * @date    2016-12-7 18:04:26
 * @description 路由配置
 */

'use strict'

export default function (router) {
    router.map({
        '/': {
            component: function (resolve) {
                require(['./App.vue'], resolve)
            }
        }
    })
}
