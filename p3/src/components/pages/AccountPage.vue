<template>
    <div id="account-page">
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

            <div id="favorites">
                <strong>Your Favorites</strong>
                <p v-if="favorites && favorites.length == 0">
                    No favorites yet.
                </p>
                <li v-for="(favorite, key) in favorites" v-bind:key="key">
                    {{ favorite.name }}
                </li>
            </div>

            <button @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small
                >(Form is prefilled for demonstration purposes; remove in final
                application)</small
            >
            <div>
                <label
                    >Email:
                    <input
                        type="text"
                        data-test="email-input"
                        v-model="data.email"
                /></label>
            </div>
            <div>
                <label
                    >Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                /></label>
            </div>

            <button @click="login" data-test="login-button">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>

            <h2> Or Register </h2>
            <label
                    >Name Please:
                    <input
                        type="text"
                        data-test="register-name-input"
                        v-model="registration.name"
                /></label>
                <label
                    >Set an Email:
                    <input
                        type="text"
                        data-test="register-email-input"
                        v-model="registration.email"
                /></label>
            </div>
            <div>
                <label
                    >Set Your Password:
                    <input
                        type="password"
                        data-test="register-password-input"
                        v-model="registration.password"
                /></label>
            </div>
            <button @click="register" data-test="register-button">Register</button>
    
        
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28-api/seeds/user.json
            data: {
                email: 'jill@harvard.edu',
                password: 'asdfasdf',
            },
            registration: {
                name: '',
                email: '',
                password: '',
            },
            errors: null,
            favorites: [],
        };
    },
    computed: {
        // Get our user and products state from the Vuex store
        user() {
            return this.$store.state.user;
        },
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
       
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        register() {
            axios.post('register', this.registration).then((response) => {
               if (response.data.errors) {
                    this.errors = response.data.errors;
                }  else {
                    this.$store.dispatch('authUser');
                } 
              
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
    },
    
};
</script>