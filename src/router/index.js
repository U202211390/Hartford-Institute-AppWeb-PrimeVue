import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";
import ExaminerPerformanceOverview from '../nursing/pages/ExaminerPerformanceOverview.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/home', component: HomeComponent, meta:{ title: 'Home' } },
        { path:'/nursing/examiner-performance-overview', component: ExaminerPerformanceOverview, meta:{ title: 'examiner-performance' } },
        { path: "/", redirect: "home"},
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent, meta:{ title: 'Page Not Found' } }
    ]
});

export default router;