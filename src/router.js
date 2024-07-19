import { createWebHistory, createRouter } from "vue-router"; // vue-router 는 라이브러리명, 라이브러리를 import 해서 쓴다고 이해
import BlogList from "@/components/BlogList.vue";
import BlogHome from "@/components/BlogHome.vue";

const routes = [
    {
        path: "/list", // 경로
        component: BlogList,
    },
    {
        path : "/",
        component: BlogHome
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;