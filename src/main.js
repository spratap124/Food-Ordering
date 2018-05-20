import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// components
import header from './components/header.vue'
import sideMenu from './components/sideMenu.vue'
import cart from './components/cart.vue'
import foodList from './components/foodList.vue'

//register components
Vue.component('Header', header);
Vue.component('sideMenu', sideMenu);
Vue.component('cart', cart);
Vue.component('foodList', foodList);

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
