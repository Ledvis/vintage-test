import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityCoordinates: {
      kyiv: {
        lat: 50.4501,
        lng: 30.5234
      },
      "new york": {
        lat: 40.7128,
        lng: -73.935242
      },
      guangzhou: {
        lat: 23.1291,
        lng: 113.2644
      },
      barcelona: {
        lat: 41.3851,
        lng: 2.1734
      }
    },
    currentCoordinates: {
      lat: 50.4501,
      lng: 30.5234
    }
  },
  mutations: {
    UPDATE_COORDINATES(state, payload) {
      state.currentCoordinates = payload;
    }
  },
  actions: {
    changeCurrentCoordinates({ commit }, coordinates) {
      commit("UPDATE_COORDINATES", coordinates);
    }
  },
  getters: {
    currentCoordinates: state => state.currentCoordinates,
    cityCoordinates: state => state.cityCoordinates
  }
});
