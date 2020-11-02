<template>
    <div id="products">
        <h2>Products</h2>
        <router-link
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:to="/products/ + (product.id - 1)"
                exact
                >
                <show-product
                    :key="product.id"
                    :product="product"
                ></show-product>
        </router-link>
        
    </div>
</template>
<script>
import ShowProduct from '../ShowProduct.vue'
import {products} from '@/products.js'

export default {
    name: 'ShowProducts',
  components: {
    ShowProduct
   },
   data(){
       return{
products: products,
// paths: {
//     1: '/products/0',   
//     2: '/products/1',    
//     3: '/products/2',    
//     4: '/products/3',    
//     5: '/products/4',    

// },
       }
   }
}
</script>
<style scoped>

</style>