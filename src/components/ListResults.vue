<template>
  <div class="list-results">
    <h1>Products</h1>
    <div class="list-card">
      <ProductCard
        v-for="product in result"
        :key="product.imageUrl"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ListResults",
  computed: {
    result: {
      get() {
        return this.$store.state.result;
      },
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.list-results {
  width: 100%;
}
.list-results > h1 {
  margin: 0;
  width: 40vw;
  text-align: left;
  padding: 0 20px;
  border-bottom: 1px black solid;
}
.list-card {
  display: flex;
  overflow: auto;
  white-space: nowrap;
}
</style>
