<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">
    <nav>
    <ul>
        <li>
            <a href='#' @click='page = "home"'>Home</a>
        </li>
        <li>
            <a href='#' @click='page = "products"'>Products</a>
        </li>
        <li>
            <a href='#' @click='page = "categories"'>Categories</a>
        </li>
    </ul>
</nav>

<home-page v-if='page == "home"'></home-page>
<products-page v-if='page == "products"'></products-page>
<show-categories v-else-if='page == "categories"'></show-categories>
    

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
   },
  data() {
    return{
      page: 'home'
    }
  } 
}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
