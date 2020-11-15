<template>
    <div>
        <h2>Add More Stories About Your Cats</h2>

        <div id="inputs">
            <label for="title">Add Title Here</label>
            <input type="text" v-model="post.title" id="title" />
<!--Add a real drag and drop with POST back to the server if you have time-->
            <label for="image">Add an image</label>
            <input type="text" v-model="post.image" id="image"/>

            <label for="content">Write Your Blog Post</label>
            <textarea v-model="post.content" id="content"></textarea>
        </div>
        <button @click="addPost">Create New Blog Post</button>
        <p v-if="!showConfirmationMessage">
        {{ errors }}
        </p>
        <p v-if="showConfirmationMessage">Congrats! Your post is now published!</p>
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            post: {
                title: 'Add Title Here',
                image: 'Add image',
                content:
                    'Write Blog Here',
                
            },
        };
    },
    methods: {
        addPost() {
            axios.post('/post', this.post).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-posts');
                    this.showConfirmationMessage = true;
                    this.post.title = '';
                    this.post.content = '';
                    this.post.image = '';

                }
            });
            
        },
    },
};
</script>

<style>
</style>