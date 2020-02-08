import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home";
import Login from "../views/Login";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresVisiter: true
    }
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresUser: true
    }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      requiresUser: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresUser)) {
    if (store.getters["User/isRefreshExist"] !== true) {
      console.log(store.getters["User/isRefreshExist"]);
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisiter)) {
    if (store.getters["User/isRefreshExist"] === true) {
      console.log(store.getters["User/isRefreshExist"]);
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
