import Vue from "vue";
import qs from "querystring";

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
    LOGIN({ commit }, payload) {
      return new Promise(resolve => {
        window.console.log(payload);
        Vue.axios
          .post("auth/login_flow", {
            client_id: "http://192.168.2.2:8123/",
            handler: ["homeassistant", null],
            redirect_uri: "http://192.168.2.2:8123/?auth_callback=1"
          })
          .then(response => {
            console.log(response);
            console.log(response.flow_id);
            Vue.axios
              .post("auth/login_flow/" + response.data.flow_id, {
                username: "csro",
                password: "csro@2020",
                client_id: "http://192.168.2.2:8123/"
              })
              .then(response => {
                window.console.log(response);
                Vue.axios({
                  method: "post",
                  url: "auth/token",
                  data: qs.stringify({
                    client_id: "http://192.168.2.2:8123/",
                    code: response.data.result,
                    grant_type: "authorization_code"
                  })
                }).then(response => {
                  console.log(response);
                });
              });
          })
          .catch(error => {
            console.log(error);
          });

        resolve(true);
        commit("LOGIN_CHANGE", true);
      });
    }
  },
  mutations: {
    LOGIN_CHANGE({ state }, value) {
      state.login = value;
    }
  }
};
