import Vue from "vue";
import moment from "moment";
import store from "..";

export default {
  namespaced: true,
  state: {
    history: {
      temp: [],
      humi: [],
      hcho: [],
      pm1: [],
      pm2d5: [],
      pm10: []
    }
  },
  getters: {},
  actions: {
    async get_aqi_history({ commit }) {
      const aqi_entity = store.state.Global.entities.filter(entity => {
        return (
          entity.entity_id.indexOf("csro") != -1 &&
          entity.entity_id.indexOf("temp") != -1
        );
      });
      if (aqi_entity.length > 0) {
        try {
          const history = await Vue.axios.get(
            "api/history/period/" +
              moment()
                .subtract(1, "hours")
                .utc()
                .format(),
            {
              params: {
                end_time: moment()
                  .utc()
                  .format(),
                filter_entity_id:
                  aqi_entity[0].entity_id +
                  "," +
                  aqi_entity[0].entity_id.replace("temp", "humi") +
                  "," +
                  aqi_entity[0].entity_id.replace("temp", "hcho") +
                  "," +
                  aqi_entity[0].entity_id.replace("temp", "pm1") +
                  "," +
                  aqi_entity[0].entity_id.replace("temp", "pm2d5") +
                  "," +
                  aqi_entity[0].entity_id.replace("temp", "pm10")
              }
            }
          );
          commit("update_history", history.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  mutations: {
    update_history(state, data) {
      console.log("update history", data);
      state.temp = data[0];
      state.humi = data[1];
      state.hcho = data[2];
      state.pm1 = data[3];
      state.pm2d5 = data[4];
      state.pm10 = data[5];
    }
  }
};
