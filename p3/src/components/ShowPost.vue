<template>
    <div v-bind:class="{ onHomePage: !includeDetails }">
        <img v-bind:class="{ postimage: includeDetails }" v-bind:src="imageSource" />
        <div class="post-title" v-if="includeDetails">{{ post.title }}</div>
        <p class="post-content" v-if="includeDetails">
            {{ post.content }}
        </p>
        <comment-section :post="post" v-if="includeDetails">

        </comment-section>
        <div v-for="comment in comments" v-bind:key="comment.id">
            {{comment.name}}{{comment.content}}
        </div>

    </div>                
</template>

<script>
import CommentSection from '@/components/CommentSection.vue';

export default {
    name: 'show-post',
    props: ['post', 'includeDetails'],
    components: {
        'comment-section': CommentSection,
    },
    data() {
        return {
            comments: []
        };
    },
    methods: {
        updateComments() {
            axios.get('comment').then((response) => {
                this.comments = response.data.comment;
            });
        },
    },
    mounted() {
        this.updateComments();
    },
    computed: {
        imageSource() {
            try {
                return require('@/assets/' +
                    this.post.image +
                    '.png');
            } catch (e) {
                return require('@/assets/image-not-found.png');
            }
        },
    },
};
</script>
<style scoped>
.postimage {
    width: 200px; 
    display: inline; 
    float: left; 
    margin: 1rem; 
}
.post-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem; 
}
.post-content {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem; 
}
.onHomePage img {
    width: 250px; 
    padding: 1rem;
}
</style>