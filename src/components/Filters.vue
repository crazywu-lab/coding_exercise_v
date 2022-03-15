<template>
  <div class="sort-container">
    Sort
    <div class="sort-list">
      <div class="dropdown">
        <input class="dropbtn" id="sort-price" type="checkbox" name="sorter" />
        <label for="sort-price">Sort by price</label>
        <ul class="dropdown-content">
          <li>
            <button @click="$store.commit('sortPriceLowHigh')">
              Price - low to high
            </button>
          </li>
          <li>
            <button @click="$store.commit('sortPriceHighLow')">
              Price - high to low
            </button>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <input class="dropbtn" id="sort-price" type="checkbox" name="sorter" />
        <label for="sort-price">Sort by rating</label>
        <ul class="dropdown-content">
          <li>
            <button @click="$store.commit('sortRatingLowHigh')">
              Rating - low to high
            </button>
          </li>
          <li>
            <button @click="$store.commit('sortRatingHighLow')">
              Rating - high to low
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sort-container {
  width: 100%;
}
.sort-list {
  display: flex;
  justify-content: space-around;
}

.droptdown{
  width: 50%;
  max-height: 50px;
}

input,
ul.dropdown-content {
  display: none;
}

label {
  position: relative;
  display: block;
  cursor: pointer;
  width: 150px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 30px;
}

input:checked ~ ul.dropdown-content {
  display: block;
  position: relative;
  list-style-type: none;
}
</style>