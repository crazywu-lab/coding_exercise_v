<template>
  <div class="list-results">
    <h2>Products</h2>
    <div class="list-card" v-if='hasResult'>
      <ProductCard
        v-for="product in result"
        :key="product.imageUrl"
        :product="product"
      />
    </div>
    <div v-if='!hasResult'>{{errorMessage}}</div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ListResults",
  data() {
    return {
      errorMessage: `No product related to '${this.$store.state.searchTerm}'. Please try other keyword.`,
    }
  },
  computed: {
    result: {
      get() {
        return this.$store.state.result;
      },
    },
    hasResult: {
      get() {
        return this.$store.state.hasResult;
      },
    }
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.list-results {
  width: 100%;
  margin-top: 10px;
}
.list-results > h2 {
  margin: 0;
  width: 40vw;
  text-align: left;
  padding: 0 30px;
  border-bottom: 1px black solid;
}
.list-card {
  display: flex;
  overflow: auto;
  white-space: nowrap;
}
</style>
