<template>
  <div class="home">
    <SearchBar />

    <Filters />
    <ListResults />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";
import ListResults from "../components/ListResults.vue";
import Filters from "../components/Filters.vue";

export default {
  name: "HomeView",
  components: {
    SearchBar,
    ListResults,
    Filters,
  },
};
</script>

<style scoped>
.home{
  height: 100vh;
}
.result-container {
  width: 90vw;
}
</style>
