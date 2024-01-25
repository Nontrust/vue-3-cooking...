/**
 * https://router.vuejs.org/guide/
 * 1. Define route components
 */
import CreatingAnApplication from '@/components/essentials/CreatingAnApplication.vue';
import TemplateSyntax from '@/components/essentials/TemplateSyntax.vue';
import App from "@/App.vue";

import { createRouter, createWebHistory } from 'vue-router'


/**
 * 2. Define some routes
 */
const routes = [
    {path:'/home', component: App},
    {path:'/essentials/create', component:CreatingAnApplication},
    {path:'/essentials/template-syntax', component:TemplateSyntax},
];

/**
 * 3. Create the router instance and pass the `routes` option (simplicity )
 * 4. Provide the history implementation to use. We are using the hash history for simplicity here.
 */
const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router