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
      Vue.set(state, "items", payload);
    },
    ADD_COMMENT(state, { itemId, comment }) {
      const item = state.items.find(item => item.id === itemId);

      item.comments.push(comment);
    },
    UPDATE_ITEM(state, { itemId, item }) {
      Vue.set(state.items, itemId, item);
    },
    REMOVE_ITEM(state, index) {
      state.items.splice(index, 1);
    },
    REMOVE_COMMENT(state, { item, index }) {
      item.comments.splice(index, 1);
    }
  },
  actions: {
    getItems({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          return response.data.map((item, index) => {
            item.id = index;
            item.comments = [];
            return item;
          });
        })
        .then(items => {
          commit("SET_ITEMS", items);
        });
    },
    createComment({ commit }, { itemId, comment }) {
      commit("ADD_COMMENT", { itemId, comment });
    },
    updateItem({ commit }, item) {
      const newItem = { ...item, body: item.body };
      commit("UPDATE_ITEM", { itemId: item.id, item: newItem });
    },
    removeItem({ commit, state }, itemId) {
      const index = state.items.findIndex(item => {
        return item.id === itemId;
      });

      commit("REMOVE_ITEM", index);
      Promise.resolve();
    },
    removeComment({ commit, state }, { text, id }) {
      const item = state.items.find(item => item.id === id);

      const index = item.comments.findIndex(comment => {
        return comment.text === text;
      });

      commit("REMOVE_COMMENT", { item, index });
    }
  },
  getters: {
    items: state => state.items,
    item: state => id => state.items.find(item => item.id === id),
    comments: state => id => state.items.find(item => item.id === id).comments
  }
});
