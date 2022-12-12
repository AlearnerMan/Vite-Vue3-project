import {
    createRouter,
    createWebHashHistory,
    Router,
    RouteRecordRaw
} from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Login from "../pages/login.vue";
import {checkIsTokenOk} from "../store/index.js";

const routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        redirect: "/home"
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
]

 const router:Router =  createRouter({
    routes,
    history: createWebHashHistory()
})



router.beforeEach((to, from, next)=>{
    // debugger;
    // 校验是否包含token
    if(to.name !== "login" && !checkIsTokenOk()){
        next("login");
    }
    next();
});

export {
    router
}