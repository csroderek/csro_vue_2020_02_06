import Vue from "vue";
import qs from "querystring";
const client_id = "http://csro.net.com";

export default {
  state: {
    username: localStorage.getItem("username") || "",
    token: localStorage.getItem("token") || "",
    expire: localStorage.getItem("expire") || "",
    refresh_token: localStorage.getItem("refresh_token") || ""
  },
  getters: {
    isAuthenticated: state => !!state.token
  },
  actions: {
    async USER_LOGIN({ commit }, user) {
      console.log(user);
      try {
        const flow_id = await Vue.axios.post("auth/login_flow", {
          client_id: client_id,
          handler: ["homeassistant", null],
          redirect_uri: client_id + "?auth_callback=1"
        });
        const code = await Vue.axios.post(
          "auth/login_flow/" + flow_id.data.flow_id,
          {
            username: user.username,
            password: user.password,
            client_id: client_id
          }
        );
        if (code.data.errors != null) {
          return Promise.reject(code.data.errors);
        } else {
          const token = await Vue.axios.post(
            "auth/token",
            qs.stringify({
              client_id: client_id,
              code: code.data.result,
              grant_type: "authorization_code"
            })
          );
          localStorage.setItem("username", user.username);
          localStorage.setItem("token", token.data.access_token);
          localStorage.setItem("expire", token.data.expire);
          localStorage.setItem("refresh_token", token.data.refresh_token);
          commit("USER_SAVE_LOGIN_TOKEN", { user: user, token: token.data });
          return Promise.resolve(true);
        }
      } catch (error) {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("expire");
        localStorage.removeItem("refresh_token");
        console.log(error);
        return Promise.reject(error);
      }
    },

    USER_TEST() {
      console.log("HELLO");
    }
  },
  mutations: {
    USER_SAVE_LOGIN_TOKEN(state, value) {
      console.log(value);
      state.username = value.user.username;
      state.token = value.token.access_token;
      state.expire = new Date().getTime() + value.token.expires_in * 1870;
      state.refresh_token = value.token.refresh_token;
      console.log(state);
    }
  }
};
