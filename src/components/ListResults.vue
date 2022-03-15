<template>
<div class="list-results">
    <h1>Results</h1>
    <ProductCard v-for="product in result" :key="product.imageUrl" :product="product" />
</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  name: "ListResults",
  computed: {
    result: {
      get() {
        return this.$store.state.result
      }
    }
  },
  components: {
    ProductCard
  },
};
</script>

<style scoped>
.list-results{
  width: 100%;
}
</style>
