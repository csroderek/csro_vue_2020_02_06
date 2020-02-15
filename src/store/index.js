import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";
import Home from "./modules/home";
import Global from "./modules/global";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    Home,
    Global
  },
  state: {
    socket: {
      isConnected: false,
      message: "",
      reconnectError: false,
      socket_init: false
    }
  },

  actions: {},
  mutations: {
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      console.log("connected");
    },
    SOCKET_ONCLOSE(state, event) {
      console.log("disconnected");
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      if (message.type == "auth_required") {
        Vue.prototype.$socket.sendObj({
          type: "auth",
          access_token: state.User.access_token
        });
      } else if (message.type == "auth_ok") {
        Vue.prototype.$socket.sendObj({
          type: "get_states",
          id: 2
        });
        Vue.prototype.$socket.sendObj({
          type: "subscribe_events",
          event_type: "state_changed",
          id: 3
        });
      } else if (message.type == "event") {
        if (message.id == 3 && message.event.event_type == "state_changed") {
          this.commit("Global/entities_update", message.event.data.new_state);
        }
      } else if (message.type == "result" && message.success == true) {
        if (message.id == 2) {
          this.commit("Global/entities_init", message.result);
        }
      }
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    }
  }
});
