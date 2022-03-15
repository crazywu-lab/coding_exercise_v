<template>
  <div class="filter-container">
      Filters
      <div class="filter-list">
          <button @click="$store.commit('sortPriceLowHigh')">Price - low to high</button>
          <button @click="$store.commit('sortPriceHighLow')">Price - high to low</button>
          <button @click="$store.commit('sortRatingLowHigh')">Rating - low to high</button>
          <button @click="$store.commit('sortRatingHighLow')">Rating - high to low</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.filter-container{
    width: 100%;
    background: rgb(197, 197, 197);
    /* position: fixed; */
}
</style>