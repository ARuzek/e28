<template>
    <div class="post">
        <div class="post-title">{{ post.title }}</div>
        <img class="post-image" v-bind:src="imageSource" />
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