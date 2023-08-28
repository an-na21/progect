import { createRouter , createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import ToDo from '../views/ToDo.vue'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todo',
        component: ToDo
    }

]

const router = createRouter({
    'history' : createWebHistory(),
    routes,
    'linkActiveClass': 'font-bold'
})

export default router