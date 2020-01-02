import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "home",
        component: () => import('../home/Home.vue')
    },
    {
        path: '/money',
        name: "money",
        component: () => import('../money/money.vue')
    },
    {
        path: '/ious',
        name: "ious",
        component: () => import('../ious/ious.vue')
    },
    {
        path: '/raise',
        name: "raise",
        component: () => import('../raise/raise.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
