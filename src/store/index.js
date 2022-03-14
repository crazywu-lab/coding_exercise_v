import { createStore } from 'vuex'
import data from '@/data/search-results.json';

export default createStore({
  state: {
    data: data,
    searchTerm: '',
    result: []
  },
  getters: {
  },
  mutations: {
    setSearchTerm(state, newValue) {
      state.searchTerm = newValue
    },
    showAll(state){
      state.result = state.data;
    }
  },
  actions: {
    showAll({commit}){
      commit('showAll')
    }
  },
  modules: {
  }
})
