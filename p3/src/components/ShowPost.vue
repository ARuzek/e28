<template>
  <div class="page">
    <div v-bind:class="{ onHomePage: !includeDetails }">
      <img
        v-bind:class="{ postimage: includeDetails }"
        v-bind:src="imageSource"
      />
      <div v-if="includeDetails">
        <div class="post-title">{{ post.title }}</div>
        <p class="post-content">
          {{ post.content }}
        </p>
      </div>
    </div>
    <div v-if="includeDetails">
      <div v-if="user">
        <comment-section :associatedBlogPost="post.title"> </comment-section>
        <div v-for="comment in comments" v-bind:key="comment.id">
          <div
            class="commentsection"
            v-if="post.title == comment.associatedBlogPost"
          >
            <p>{{ comment.content }}</p>
            <cite>Author: {{ comment.name }}</cite>
          </div>
        </div>
      </div>
      <router-link to="/posts/new" v-else>Login to View Comments</router-link>
    </div>
  </div>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
import { axios } from "@/common/app.js";
export default {
  name: "show-post",
  props: ["post", "includeDetails"],
  components: {
    "comment-section": CommentSection,
  },
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    updateComments() {
      axios.get("comment").then((response) => {
        this.comments = response.data.comment;
      });
    },
  },
  mounted() {
    this.updateComments();
  },
  
  computed: {
    // Get our user state from the Vuex store
    user() {
      return this.$store.state.user;
    },
    imageSource() {
       
        try {
          if(this.post.drawing != null) {
            return JSON.parse(this.post.drawing);
            }else{
          return require("@/assets/" + this.post.image + ".png");
            }
        } catch (e) {
          return require("@/assets/image-not-found.png");
        }
       }
      
    
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  font-family: "Pacifico", cursive;
  background-color: #ffd9d9;
  border-radius: 0.5rem;
  box-shadow: 2px 2px #444444;
  padding: 0.5rem;
  transition: background-color 0.5s;
}

a:hover {
  background-color: #f5e6e6;
}
.page {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.commentsection {
  background-color: #ffd9d98a;
  border-radius: 1rem;
  padding: 1rem;
  padding-left: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.postimage {
  width: 200px;
  display: inline;
  float: left;
  margin: 1rem;
  border: 3px solid #000000;
  border-radius: 1rem;
}
.post-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
}
.post-content {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
}
.onHomePage img {
  width: 250px;
  padding: 1rem;
}
</style>
