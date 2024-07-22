import { createWebHistory, createRouter } from "vue-router"; // vue-router 는 라이브러리명, 라이브러리를 import 해서 쓴다고 이해
import BlogList from "@/components/BlogList.vue";
import BlogHome from "@/components/BlogHome.vue";
import BlogDetail from "@/components/BlogDetail.vue";
import BlogComment from "@/components/BlogComment.vue";
import BlogAuthor from "@/components/BlogAuthor.vue";


// 같은 route 에 걸리면 위에가 우선순위!
const routes = [
    {
        path: "/list", // 경로
        component: BlogList
    },
    {
        path : "/",
        component: BlogHome
    },
    {
        path : "/detail/:id(\\d+)", // :아무이름(작명) - :파라미터 문법 / \\d+ => 정규식! (숫자만 입력할 수 있게 함) / 자세한 내용은 vue-router 문법 참고
        component: BlogDetail,
        children : [
            {
                path: "author",
                component: BlogAuthor
            },
            {
                path: "comment",
                component: BlogComment
            }

        ]
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;