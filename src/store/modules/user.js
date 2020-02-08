import Vue from "vue";
import qs from "querystring";
const client_id = "http://192.168.2.2:8123";

export default {
  namespaced: true,
  state: {
    user_name: localStorage.getItem("user_name") || "",
    access_token: localStorage.getItem("access_token") || "",
    refresh_token: localStorage.getItem("refresh_token") || ""
  },
  getters: {
    isRefreshExist: state => !!state.refresh_token
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
          localStorage.setItem("user_name", user.username);
          localStorage.setItem("access_token", token.data.access_token);
          localStorage.setItem("refresh_token", token.data.refresh_token);
          Vue.axios.defaults.headers.common["Authorization"] =
            "Bearer " + token.data.access_token;
          commit("USER_UPDATE_LOGIN_TOKEN", {
            user: user,
            token: token.data
          });
          return Promise.resolve(true);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    USER_REFRESH_TOKEN({ commit }, value) {
      Vue.axios.defaults.headers.common["Authorization"] =
        "Bearer " + value.access_token;
      commit("USER_UPDATE_REFRESH_TOKEN", value);
    }
  },
  mutations: {
    USER_UPDATE_LOGIN_TOKEN(state, value) {
      state.user_name = value.user.username;
      state.access_token = value.token.access_token;
      state.refresh_token = value.token.refresh_token;
    },
    USER_UPDATE_REFRESH_TOKEN(state, value) {
      state.access_token = value.access_token;
    }
  }
};
