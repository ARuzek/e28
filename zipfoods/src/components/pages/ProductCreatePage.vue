<template>
    <div v-on:edit-product = "editProduct()">
        <h2>Add a Product</h2>

        <div id="inputs">
            <label for="name">*Name</label>
            <input type="text" v-model="product.name" id="name" />

            <label for="sku">*SKU:</label>
            <input type="text" v-model="product.sku" id="sku" />

            <label for="price">*Price:</label>
            <input type="text" v-model="product.price" id="price" />

            <label for="available">*Quantity available:</label>
            <input type="text" v-model="product.available" id="available" />

            <label for="weight">Weight (in lbs):</label>
            <input type="text" v-model="product.weight" id="weight" />

            <label for="perishable" class="form-checkbox-label">
                <input
                    type="checkbox"
                    v-model="product.perishable"
                    id="perishable"
                />
                *Perishable?
            </label>

            <label for="description">*Description</label>
            <textarea v-model="product.description" id="description"></textarea>
        </div>
        <button @click="addProduct">Add Product</button>
        <p v-if="!showConfirmationMessage">
        {{ errors }}
        </p>
        <p v-if="showConfirmationMessage">Thanks, this product has been added to the inventory</p>
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            product: {
                name: 'Candy Heart Grapes',
                sku: 'candy-heart-grapes-' + new Date().valueOf(),
                price: 5.99,
                available: 25,
                weight: 2,
                perishable: true,
                description:
                    'Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!',
            },
        };
    },
    methods: {
        addProduct() {
            axios.post('/product', this.product).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-products');
                    this.showConfirmationMessage = true;
                    this.product.name = '';
                    this.product.sku = '';
                    this.product.price = 0;
                    this.product.available = 0;
                    this.product.weight = 0;
                    this.product.perishable = false;
                    this.product.description = '';

                }
            });
            
        },
    },
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>