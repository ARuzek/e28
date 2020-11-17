<template>
    <div>
        <h2>Add More Stories About Your Cats</h2>

        <div id="inputs">
            <label for="title">Add Your Blog Post Title Here:
            <input type="text" v-model="post.title" id="title" /></label>
<!--Add a real drag and drop with POST back to the server if you have time-->
            <label for="image">Add An Image Name:
            <input type="text" v-model="post.image" id="image"/></label>

            <label for="content">Write Your Blog Post Here:</label>
            <textarea v-model="post.content" id="content" rows="50" cols="116"></textarea>
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
                title: '',
                image: '',
                content: '', 
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

<style scoped>
   h2, p, label, button{
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    div {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    }
    input, button, textarea {
    border-radius: 1rem;
    border: 1px solid pink;
    }
    label {
        margin: 1rem;
        text-align: left;
    }
    button {
        padding: 1rem; 
        background-color: pink;
        font-size: 1.2rem;
        margin: 1rem;
    }
    button:hover {
        background-color: lightpink;
    }
   
    
</style>
