<template>
  <div class="filter-container">
    Filters
    <div class="filter-list">
      <div class="dropdown">
        <button class="dropbtn">Sort by price</button>
        <div class="dropdown-content">
          <button @click="$store.commit('sortPriceLowHigh')">
            Price - low to high
          </button>
          <button @click="$store.commit('sortPriceHighLow')">
            Price - high to low
          </button>
        </div>
      </div>

      <button @click="$store.commit('sortRatingLowHigh')">
        Rating - low to high
      </button>
      <button @click="$store.commit('sortRatingHighLow')">
        Rating - high to low
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter-container {
  width: 100%;
  background: rgb(197, 197, 197);
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
</style>
