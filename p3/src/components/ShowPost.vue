<template>
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
      <div>
        <comment-section v-if="user" :associatedBlogPost="post.title">
        </comment-section>
        <div
          class="commentsection"
          v-for="comment in comments"
          v-bind:key="comment.id"
        >
          <div v-if="post.title == comment.associatedBlogPost">
            <p>{{ comment.name }}</p>
            <p>{{ comment.content }}</p>
          </div>
        </div>
      </div>
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
        return require("@/assets/" + this.post.image + ".png");
      } catch (e) {
        return require("@/assets/image-not-found.png");
      }
    },
  },
};
</script>
<style scoped>
.commentsection {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.postimage {
  width: 200px;
  display: inline;
  float: left;
  margin: 1rem;
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
