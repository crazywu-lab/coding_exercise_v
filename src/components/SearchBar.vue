<template>
  <div class="search-bar">
    <form action="" class="search-form">
      <input type="text" placeholder="type your keyword" v-model="searchTerm" />

      <button @click="$store.dispatch('handleSearch')">
        Search
      </button>
      <!-- <button @click="$store.commit('showAll')">Show All</button> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  computed: {
    searchTerm: {
      get() {
        return this.$store.state.searchTerm;
      },
      set(newSearchTerm) {
        this.$store.commit("setSearchTerm", newSearchTerm);
      },
    },
  },
};
</script>

<style scoped>
.search-bar {
  width: 95vw;
}
.search-form > input{
  width: 70%;
  border: 1px solid #ccc;
  margin: 15px;
  padding: 10px;
  border-radius: 30px;
  box-sizing: border-box;
  display: inline-block;
}
.search-form > button {
  border: 0;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 20px;
}
</style>
