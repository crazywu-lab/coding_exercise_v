<template>
  <div class="sort-container">
    <!-- Sort -->
    <div class="sort-list">
      <div class="dropdown">
        <input class="dropbtn" id="sort-price" type="checkbox" name="sorter" />
        <label for="sort-price">Sort by price</label>
        <ul class="dropdown-content">
          <li>
            <button @click="$store.commit('sortPriceLowHigh')">
              low to high
            </button>
          </li>
          <li>
            <button @click="$store.commit('sortPriceHighLow')">
              high to low
            </button>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <input class="dropbtn" id="sort-rating" type="checkbox" name="sorter" />
        <label for="sort-rating">Sort by rating</label>
        <ul class="dropdown-content">
          <li>
            <button @click="$store.commit('sortRatingLowHigh')">
              low to high
            </button>
          </li>
          <li>
            <button @click="$store.commit('sortRatingHighLow')">
              high to low
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
  display: block;
  height: 0px;
  position: absolute;
  overflow: hidden;
list-style-type: none;
margin: 5px;
  padding: 0px;
  transition: all 0.5s ease-out;
}

label {
  position: relative;
  color: black;
  display: block;
  cursor: pointer;
  width: 140px;
  border: 1px black solid;
  padding: 0;
  margin: 5px;
  border-radius: 30px;
}

input:checked ~ ul.dropdown-content {
  height:300px;
  transition: all 0.5s ease-in;
}

.dropdown-content > li {
  margin: 0px;
  white-space: nowrap;
}

.dropdown-content > li > button{
  width: 140px;
  border: 1px black solid;
  border-radius: 30px;
}
</style>