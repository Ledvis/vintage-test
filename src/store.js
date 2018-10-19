import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS(state, payload) {
      state.items = payload;
    }
  },
  actions: {
    getItems({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        commit("SET_ITEMS", response.data);
      });
    }
  },
  getters: {
    items: state => state.items
  }
});
