import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home";
import Login from "../views/Login";
import Dashboard from "../views/subview/Dashboard";
import Airsystem from "../views/subview/Airsystem";
import Weather from "../views/subview/Weather";
import About from "../views/subview/About";

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
    component: Home,
    meta: {
      requiresUser: true
    },
    children: [
      {
        path: "",
        component: Dashboard
      },
      {
        path: "airsystem",
        component: Airsystem
      },
      {
        path: "weather",
        component: Weather
      },
      {
        path: "about",
        component: About
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  let refresh_exist = !!store.getters["User/user_state"].refresh_token;
  if (to.matched.some(record => record.meta.requiresUser)) {
    if (refresh_exist !== true) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisiter)) {
    if (refresh_exist === true) {
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
