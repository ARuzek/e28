<template>
    <div id="post-page">
        <div v-if="post">
            <show-post
                :post="post"
                :includeDetails="true"
            ></show-post>
        </div>

        <div v-if="postNotFound">
            <p>post {{ id }} not found.</p>

            <router-link v-bind:to="'/posts'"
                >Go to all posts
            </router-link>
        </div>
    </div>
</template>

<script>
import ShowPost from '@/components/ShowPost.vue';
export default {
    name: '',
    props: ['id', 'posts'],
    components: {
        'show-post': ShowPost,
    },
    data() {
        return {};
    },
    computed: {
        post() {
            return this.posts.filter((post) => {
                return post.id == this.id;
            }, this.id)[0];
        },
        postNotFound() {
            return this.post == null;
        },
    },
};
</script>