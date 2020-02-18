import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueNativeSock from "vue-native-websocket";
import server from "./plugins/server";

Vue.use(VueNativeSock, server.websocket, {
  store: store,
  format: "json",
  connectManually: false,
  reconnection: true,
  reconnectionDelay: 2000
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
