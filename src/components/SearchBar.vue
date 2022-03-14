<template>
  <div class="search-bar">
    <form action="">
      <input type="text" placeholder="type your keyword" v-model="searchTerm"/>

      <button class="search-btn">Search</button>
      <button @click="$store.commit('showAll')">Show All</button>
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
        return this.$store.state.searchTerm
      },
      set(newSearchTerm) {
        this.$store.commit('setSearchTerm', newSearchTerm)
      }
    }
  }
};
</script>

<style scoped></style>
