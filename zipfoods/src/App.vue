<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">
    <home-page></home-page>
    <products-page></products-page>
    <show-categories></show-categories>
    

  </div>
</template>

<script>
 
 import HomePage from './components/pages/HomePage.vue'
 import ProductsPage from './components/pages/ProductsPage.vue'
 import ShowCategories from './components/pages/ShowCategories.vue'

export default {
  name: 'App',
  components: {
   HomePage, 
   ProductsPage, 
   ShowCategories
   }
}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
