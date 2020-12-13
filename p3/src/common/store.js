import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
       
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
       
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }
        
                    resolve();
                });
            });
        },
    },
    
})
