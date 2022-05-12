import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  //Main Page
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


  //INFORMATION PAGE
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


  //Sub Pemrograman Page
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


  //Sub Desain Page
  {
    path: "/listColor",
    name: "listColor",
    component: () => import("../views/desainpage/subdesainpage/listColor.vue"),
  },
  {
    path: "/listIconIllus",
    name: "listIconIllus",
    component: () => import("../views/desainpage/subdesainpage/listIconIllus.vue"),
  },
  {
    path: "/listUploadDesain",
    name: "listUploadDesain",
    component: () => import("../views/desainpage/subdesainpage/listUploadDesain.vue"),
  },


  //Sub Musik Page
  {
    path: "/listMusikPlayer",
    name: "listMusikPlayer",
    component: () => import("../views/musikpage/submusicpage/listMusikPlayer.vue"),
  },
  {
    path: "/listLirik",
    name: "listMusikPlayer",
    component: () => import("../views/musikpage/submusicpage/listLirik.vue"),
  },
  {
    path: "/listCord",
    name: "listCord",
    component: () => import("../views/musikpage/submusicpage/listCord.vue"),
  },


  //WORK PAGE
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
