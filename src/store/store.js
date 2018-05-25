import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        reset:false
    },
    mutations:{
        emptyCart(state) {
            state.reset = true;
        },
        resetCart(state) {
            state.reset = false;
        }
    }
});
