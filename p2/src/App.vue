<template>
    <div id="app">
        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                        >{{ link }}</router-link
                    >
                </li>
            </ul>
        </nav>
        <h1>My Super Cute Baby-Cats</h1>
        <router-view
            v-bind:posts="posts"
            v-on:update-posts="updatePosts()"
        ></router-view>
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    name: 'App',
    data() {
        return {
            posts: [],
            links: ['home', 'create new post'],
            paths: {
                home: '/',
                'create new post': '/posts/new',
            },
        };
    },
    methods: {
        updatePosts() {
            axios.get('post').then((response) => {
                this.posts = response.data.post;
            });
        },
    },
    mounted() {
        this.updatePosts();
    },
};
</script>

<style scoped>
h1 {
    font-family: 'Pacifico', cursive;
    font-size: 4rem; 
    text-align: center;
    background-color: pink; 
    color: #444444; 
    padding: 1rem; 
}
li {
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    
}

a {
    text-decoration: none;
    font-family: 'Pacifico', cursive;
    background-color: white; 
    border-radius: .5rem; 
    box-shadow: 2px 2px #444444;
    padding: .5rem;
    transition: background-color .5s;
}

a:hover {
background-color: #f5e6e6

}

ul {
    padding: 0; 
}
</style>