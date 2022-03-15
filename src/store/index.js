import { createStore } from 'vuex'
import data from '@/data/search-results.json';

export default createStore({
  state: {
    data: data,
    searchTerm: '',
    result: data
  },
  getters: {
  },
  mutations: {
    setSearchTerm(state, newValue) {
      state.searchTerm = newValue
    },
    showAll(state){
      state.result = state.data;
    },
    handleSearch(state){
      state.result = state.data.filter((product) => product.description.toLowerCase().includes(state.searchTerm) && product.availability > 0);
    },
    sortPriceLowHigh(state){
      state.result.sort((a,b) => a.price.slice(1) - b.price.slice(1))
    },
    sortPriceHighLow(state){
      state.result.sort((a,b) => b.price.slice(1) - a.price.slice(1))
    },
    sortRatingLowHigh(state){
      state.result.sort((a,b) => a.rating - b.rating)
    },
    sortRatingHighLow(state){
      state.result.sort((a,b) => b.rating - a.rating)
    },
  },
  actions: {
    // showAll({commit}){
    //   commit('showAll')
    // }
  },
  modules: {
  }
})
