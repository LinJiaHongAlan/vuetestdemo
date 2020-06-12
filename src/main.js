import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import router from './router/index.js'
import { Input, Button, Row, Col, Card } from 'element-ui'
Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
