<template>
  <div id="products">
    <h2>Products</h2>
    <router-link
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:to="/products/ + (product.id - 1)"
      exact
    >
      <show-product :key="product.id" :product="product"></show-product>
    </router-link>
  </div>
</template>
<script>
import ShowProduct from "../ShowProduct.vue";
// import {products} from '@/products.js'
export default {
  name: "ShowProducts",
  components: {
    ShowProduct,
  },
  props: ['products'],
  data() {
    return {
   
    };
  },
  
};
</script>
<style scoped></style>
