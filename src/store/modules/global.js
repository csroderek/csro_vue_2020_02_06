import Vue from "vue";
import store from "..";

export default {
  namespaced: true,
  state: {
    entities: [],
    clock: {
      year: Number,
      month: Number,
      day: Number,
      hour: Number,
      minute: Number,
      second: Number
    }
  },
  getters: {
    clock(state) {
      let date =
        state.clock.year.toString() +
        "-" +
        state.clock.month.toString().padStart(2, "0") +
        "-" +
        state.clock.day.toString().padStart(2, "0");

      let time =
        state.clock.hour.toString() +
        ":" +
        state.clock.minute.toString().padStart(2, "0") +
        ":" +
        state.clock.second.toString().padStart(2, "0");
      return date + " " + time;
    }
  },
  actions: {
    socket_send({ state, commit }, data_obj) {
      data_obj.id = store.state.socket.socket_id;
      Vue.prototype.$socket.sendObj(data_obj);
      store.commit("SOCKET_ADD_MESSAGE_ID");
    }
  },
  mutations: {
    clock_update(state) {
      let now = new Date();
      state.clock.year = now.getFullYear();
      state.clock.month = now.getMonth() + 1;
      state.clock.day = now.getDate();
      state.clock.hour = now.getHours();
      state.clock.minute = now.getMinutes();
      state.clock.second = now.getSeconds();
    },
    entities_init(state, value) {
      state.entities = value;
    },
    entities_update(state, value) {
      // console.log(value);
      const result = state.entities.filter(entity => {
        return entity.entity_id == value.entity_id;
      });
      if (result.length == 0) {
        state.entities.push(value);
      } else {
        state.entities.splice(state.entities.indexOf(result[0]), 1, value);
      }
    }
  }
};
