import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    }
    ]
})

export default router