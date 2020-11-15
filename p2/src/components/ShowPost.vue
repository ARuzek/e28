<template>
    <div v-bind:class="{ gridview: !includeDetails }">
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
.gridview {
display: flex;
flex-direction: row;
flex-wrap: wrap;
}
.gridview img {
    width: 250px; 
    padding: 1rem;
}
</style>