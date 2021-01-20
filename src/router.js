import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/home.vue')
        },
        {
            path: '/step',
            name: 'step',
            component: () => import('./pages/step.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('./pages/test.vue')
        }
    ]
})