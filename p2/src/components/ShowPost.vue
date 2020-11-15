<template>
    <div v-bind:class="{ onHomePage: !includeDetails }">
        <img class="post-image" v-bind:src="imageSource" />
        <div class="post-title" v-if="includeDetails">{{ post.title }}</div>
        <p class="content" v-if="includeDetails">
            {{ post.content }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'show-post',
    props: ['post', 'includeDetails'],
    data() {
        return {};
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

.onHomePage img {
    width: 250px; 
    padding: 1rem;
}
</style>