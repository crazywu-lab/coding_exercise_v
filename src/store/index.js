import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchTerm: "",
    result: [],
    hasResult: true,
  },
  getters: {},
  mutations: {
    setSearchTerm(state, newValue) {
      state.searchTerm = newValue;
    },
    setProducts(state, data) {
      state.result = data;
    },
    handleSearch(state, data) {
      state.result = data;
    },
    sortPriceLowHigh(state) {
      state.result.sort((a, b) => a.price.slice(1) - b.price.slice(1));
    },
    sortPriceHighLow(state) {
      state.result.sort((a, b) => b.price.slice(1) - a.price.slice(1));
    },
    sortRatingLowHigh(state) {
      state.result.sort((a, b) => a.rating - b.rating);
    },
    sortRatingHighLow(state) {
      state.result.sort((a, b) => b.rating - a.rating);
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get("http://localhost:3000/api/test/products/")
        .then((response) => {
          commit("setProducts", response.data);
        })
        .catch((error) => {
          alert(error);
        });
    },
    handleSearch({ commit, state }) {
      axios
        .get("http://localhost:3000/api/test/products/search/" + state.searchTerm)
        .then((response) => {
          state.hasResult = response.data.length !== 0;
          commit("handleSearch", response.data);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  modules: {},
});
