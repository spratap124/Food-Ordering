import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//central store
import {store} from './store/store'

// components
import header from './components/header.vue'
import sideMenu from './components/sideMenu.vue'
import cart from './components/cart.vue'
import foodList from './components/foodList.vue'
import addToCart from './components/addToCart.vue'

//register components
Vue.component('Header', header);
Vue.component('sideMenu', sideMenu);
Vue.component('cart', cart);
Vue.component('foodList', foodList);
Vue.component('addToCart', addToCart);


Vue.use(VueResource);

new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
