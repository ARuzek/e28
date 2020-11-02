<template>
    <div id='product-page' class="product">
        <div class="product-name">
            <h1>{{ products[id].name }}</h1></div>
        <img
            class="product-thumb"
            :src="require('@/assets/images/products/'+products[id].id+'.jpg')"
        />
        <p class="product-description">{{ products[id].description }}</p>
        <div class="product-price">${{ products[id].price }}</div>
    </div>
</template>

<script>
import {products} from '@/products.js'
export default {
    props: ['id'], // comes from our dynamic segment
    data() {
        return {
            products: products,
        };
    }
};
</script>