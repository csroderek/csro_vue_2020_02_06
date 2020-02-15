import Vue from "vue";

export default {
  namespaced: true,
  state: {
    entities: []
  },
  getters: {},
  actions: {},
  mutations: {
    entities_init(state, value) {
      state.entities = value;
    },
    entities_update(state, value) {
      console.log(value);
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
