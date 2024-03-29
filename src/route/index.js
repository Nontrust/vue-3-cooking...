/**
 * https://router.vuejs.org/guide/
 * 1. Define route components
 */
import CreatingAnApplication from '@/page/essentials/CreatingAnApplication.vue';
import TemplateSyntax from '@/page/essentials/TemplateSyntax.vue';
import ReactivityFundamentals from '@/page/essentials/ReactivityFundamentals.vue';
import App from "@/App.vue";

import { createRouter, createWebHistory } from 'vue-router'
import Computed from "@/page/essentials/Computed.vue";
import ClassAndStyle from "@/page/essentials/ClassAndStyle.vue";
import Conditional from "@/page/essentials/Conditional.vue";
import List from "@/page/essentials/list.vue";
import EventHandling from "@/page/essentials/EventHandling.vue";
import Forms from "@/page/essentials/forms.vue";


/**
 * 2. Define some routes
 */
const routes = [
    {path:'/home', component: App},
    {path:'/essentials/create', component:CreatingAnApplication},
    {path:'/essentials/template-syntax', component:TemplateSyntax},
    {path:'/essentials/reactivity-fundamentals', component:ReactivityFundamentals},
    {path:'/essentials/computed', component:Computed},
    {path:'/essentials/class-and-style', component:ClassAndStyle},
    {path:'/essentials/conditional', component:Conditional},
    {path:'/essentials/list', component:List},
    {path:'/essentials/event-handling', component:EventHandling},
    {path:'/essentials/forms', component:Forms},
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
