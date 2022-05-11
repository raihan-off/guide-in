import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/information",
    name: "information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InformationView.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () =>
      import("../views/WorkView.vue"),
  },


  //information
  {
    path: "/pemrograman",
    name: "pemrograman",
    component: () => import("../views/codepages/PemrogramanPage.vue"),
  },
  {
    path: "/desain",
    name: "desain",
    component: () => import("../views/desainpage/DesainPage.vue"),
  },
  {
    path: "/musik",
    name: "musik",
    component: () => import("../views/musikpage/MusikPage.vue"),
  },


  //subpemrograman
  {
    path: "/listDoc",
    name: "listDoc",
    component: () => import("../views/codepages/subcodepages/ListDoc.vue"),
  },
  {
    path: "/listCourse",
    name: "listCourse",
    component: () => import("../views/codepages/subcodepages/ListCourse.vue"),
  },
  {
    path: "/listUsefull",
    name: "listUsefull",
    component: () => import("../views/codepages/subcodepages/ListUsefull.vue"),
  },
  {
    path: "/listPlayground",
    name: "listPlayground",
    component: () => import("../views/codepages/subcodepages/ListPlayground.vue"),
  },
  {
    path: "/listGameCode",
    name: "listGameCode",
    component: () => import("../views/codepages/subcodepages/ListGameCode.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
