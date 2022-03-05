import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  products: mock,
  cart: [{
    id: 2,
    name: 'Fake Data',
    price: '$2.41',
    country: 'Brazil',
    image: "sweet-potato.jpg",
  },]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
