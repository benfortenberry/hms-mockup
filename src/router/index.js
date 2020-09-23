import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/uswds/table',
        name: 'Table',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/USWDS/Table.vue')
    },
    {
        path: '/uswds/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/USWDS/Home.vue')
    },
    {
        path: '/bootstrap/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/bootstrap/Home.vue')
    },
    {
        path: '/bootstrap/table',
        name: 'Table',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/bootstrap/Table.vue')
    },
    {
        path: '/prime/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Prime/Home.vue')
    },
    {
        path: '/prime/table',
        name: 'Table',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Prime/Table.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router