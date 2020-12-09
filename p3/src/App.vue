<template>
    <div id="app">
        <nav>
            <ul>
                <li v-if="user">
                    <router-link
                        v-for="link in userlinks"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                        >{{ link }}</router-link
                    >
                </li>
                <li v-else>
                    <router-link
                        v-for="link in strangerlinks"
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
import { axios } from '@/common/app.js';
export default {
    name: 'App',
    data() {
        return {
            posts: [],
            userlinks: ['home', 'create new post'],
            strangerlinks: ['home', 'login / register'],
            paths: {
                home: '/',
                'create new post': '/posts/new',
                'login / register': '/posts/new'
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
     computed: {
        // Get our user state from the Vuex store
        user() {
            return this.$store.state.user;
        },
    },
    mounted() {
        this.updatePosts();
        this.$store.dispatch('authUser');
    },
};
</script>

<style scoped>
h1 {
    font-family: 'Pacifico', cursive;
    font-size: 4rem; 
    text-align: center;
    background-color: #ffd9d9; 
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
    background-color: #ffd9d9; 
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