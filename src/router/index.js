/* eslint-disable */
import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routers = [{
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue')
    },

]
// 实例化VueRouter
const router = new VueRouter({
    mode: 'hash',
    routes: routers
})
export default router