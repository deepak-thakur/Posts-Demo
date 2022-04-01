import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageVisitCount: 0,
  },
  mutations: {
    updateCount(state) {
      state.pageVisitCount++;
    },
  },
  actions: {
    update({ commit }) {
      commit("updateCount");
    },
  },
  modules: {},
});
