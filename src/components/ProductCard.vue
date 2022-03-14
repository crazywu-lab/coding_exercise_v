<template>
  <div class="product-card">
    <div class="img-container">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div class="info-container">
      <h3>{{ product.description }}</h3>
      <h4>Price: <span>{{ product.price}}</span></h4>
      <h5>Availability: <span>{{ product.availability }}</span></h5>
      <h6>Rating: {{product.rating}}</h6>
      <p>Location: aisle - {{product.aisle}} bay - {{product.bay}}</p>
      <button>
        <a :href="product.navigationUrl" target="_blank">More Details</a>
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
  display: flex;
  flex-wrap: wrap;
}
.img-container {
  width: 30%;
}
.img-container > img {
  width: 100%;
}
.info-container {
  width: 70%;
}
</style>
