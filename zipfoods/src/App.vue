<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">
<nav>
    <ul>
        <li v-for='link in links' :key='link'>
            <a href='#' @click='page = link'>{{ link }}</a>
        </li>
    </ul>
</nav>

<component v-bind:is='linkComponents[page]'></component>


    

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
      /* Default page to start with */
    page: 'home',

    /* Store links in an array to maintain order */
    links: ['home', 'products', 'categories'],

    /* Map links to the appropriate component */
    linkComponents: {
    home: 'home-page',
    products: 'products-page',
    categories: 'show-categories'
}
    }
  } 
}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
