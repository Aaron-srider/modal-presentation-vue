import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HelloWorld from '@/views/HelloWorld.vue';
import About from '@/views/ ModalPresentation.vue';
import ModalPresentationView from '../views/ ModalPresentation.vue';
import TestView from '../views/Test.vue';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/hello-world',
    },
    {
        path: '/hello-world',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/test',
        name: 'test',
        component: TestView,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
