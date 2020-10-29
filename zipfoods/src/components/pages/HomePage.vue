<template>
  <div id="app">
    <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>
    <show-featured :category='"snacks"'></show-featured>

  </div>
</template>

<script>
 import ShowFeatured from '@/components/ShowFeatured.vue'

export default {
  name: 'App',
  components: {
    ShowFeatured
   }
}
</script>

<style lang='scss'>
</style>