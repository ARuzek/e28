<template>
    <div id="app">
        <h1>My Super Cute Baby-Cats</h1>

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
            links: ['home', 'posts', 'create new post'],
            paths: {
                home: '/',
                posts: '/posts',
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
</style>