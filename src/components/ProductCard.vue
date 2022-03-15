<template>
  <div class="product-card">
    <div class="img-container">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div class="info-container">
      <h3>{{ product.description }}</h3>
      <div class="info-block">
        <h4>
          Price: <span>{{ product.price }}</span>
        </h4>
        <h6>Rating: {{ product.rating }}</h6>
      </div>

      <h5>
        Availability: <span>{{ product.availability }}</span>
      </h5>

      <!-- <p>Location: aisle - {{ product.aisle }} bay - {{ product.bay }}</p> -->
      <button>
        <a :href="product.navigationUrl" target="_blank" >More Details</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  components: {},
};
</script>

<style scoped>
.product-card {
  min-width: 80vw;
  height: 75vh;
  display: flex;
  flex-wrap: wrap;
  background: #f5f5f5;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 6px 0 rgba(31, 38, 135, 0.3);
}
.img-container {
  width: 100%;
  height: 40vh;
  background: white;
  border-radius: 20px;
}
.img-container > img {
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  height: auto;
}
.info-container {
  width: 100%;
}
.info-container > h3 {
  white-space: normal;
  text-align: left;
  padding: 0 20px;
  margin: 0;
}

.info-container > h5 {
  margin: 0;
}
.info-container > button {
  text-decoration: none;
  border: none;
  color: white;
  background: black;
  padding: 10px;
  border-radius: 20px;
}
.info-container > button > a {
  text-decoration: none;
  border-bottom: 0;
  color: white;
}
.info-container > button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.info-block {
  display: flex;
  justify-content: space-around;
}
</style>
