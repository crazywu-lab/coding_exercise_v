<template>
  <div class="home">
    <SearchBar />
    <ListResults />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '../components/SearchBar.vue';
import ListResults from '../components/ListResults.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    ListResults
  }
}
</script>
