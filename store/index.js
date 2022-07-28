import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: () => ({
        products: []
    }),
    mutations: {
        addProduct(state, payload) {
            state.products.push(payload)
        }
    }
})