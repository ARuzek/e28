<template>
    <div class="post">
        <div class="post-title">{{ post.title }}</div>
        <p class="content" v-if="includeDetails">
            {{ post.content }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'show-post',
    props: ['post', 'includeDetails'],
    data: function () {
        return {};
    },
};
</script>