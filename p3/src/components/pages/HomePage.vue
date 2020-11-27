<template>
  <div>
    <p>This is a blog about my two super cute baby cats: Euclid (Eucii) and Jupiter (Doopider). I adopted them when they were kittens, but they've grown up so fast. They are almost 2 years old now! Read the blog to find out what they're up to every day. :) </p>
    <div class="gridview">
      <router-link
          v-for="post in posts"
          :key="post.id"
          v-bind:to="'/posts/' + post.id"
          exact
      >
          <show-post :post="post"></show-post>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowPost from '@/components/ShowPost.vue';
export default {
    name: '',
    components: {
        'show-post': ShowPost,
    },
    props: ['posts'],
    data: function () {
        return {};
    },
};
</script>

<style scoped>
h2, p{
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
div {
  max-width: 900px;
  margin: 0 auto;
}
.gridview {
display: flex;
flex-direction: row;
flex-wrap: wrap;
}

</style>