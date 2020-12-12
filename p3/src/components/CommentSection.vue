<template>
    <div>
        <h2>Write a Comment</h2>

        <div id="inputs">
            <cite>Author: {{comment.name}}</cite>
            <label for="content">Write Your Comment Here:</label>
            <textarea v-model="comment.content" id="content" rows="10" cols="116"></textarea>
        </div>
        <button @click="addComment">Add Comment</button>
        <p v-if="!showConfirmationMessage">
        {{ errors }}
        </p>
        <p v-if="showConfirmationMessage">Congrats! Your comment is now published!</p>
        </div>
</template>

<script>
import { axios } from '@/common/app.js';
export default {
    name: 'comment-section',
    props: ['associatedBlogPost'],
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            comment: {
                name: this.$store.state.user.name,
                content: '', 
                associatedBlogPost: this.associatedBlogPost
            },
            
        };
    },
    
    methods: {
       
        addComment() {
            axios.post('/comment', this.comment).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-comments');
                    this.showConfirmationMessage = true;
                    this.comment.content = '';

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
    h2 {
            font-family: 'Pacifico', cursive;

    }
   
    div {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    }
    input, button, textarea {
    border-radius: 1rem;
    border: 1px solid #ffd9d9;
    }
    label {
        margin: 1rem;
        text-align: left;
    }
    button {
        padding: 1rem; 
        background-color: #ffd9d9;
        font-size: 1.2rem;
        margin: 1rem;
    }
    button:hover {
        background-color: lightpink;
    }
    cite {
        margin-top: -10px; 
        margin-left: 16px; 
    }
    
</style>
