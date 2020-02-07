import Vue from "vue";
import qs from "querystring";
const client_id = "http://csro.net.com";

export default {
  state: {
    name: "",
    login: true,
    token: localStorage.getItem("token") || null,
    expire: localStorage.getItem("expire") || null,
    refresh_token: localStorage.getItem("refresh_token") || null
  },
  getters: {
    login: state => {
      return state.login;
    }
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
          commit("USER_SAVE_TOKEN", { user: user, token: token.data });
          return Promise.resolve(true);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },
  mutations: {
    USER_SAVE_TOKEN(state, value) {
      console.log(state);
      console.log(value);
      state.name = value.user.username;
      state.login = true;
      state.token = value.token.access_token;
      state.expire = new Date().getTime() + value.token.expires_in * 1000;
      state.refresh_token = value.token.refresh_token;
    }
  }
};
