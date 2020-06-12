import Vue from 'vue'
import VueRouter from 'vue-router'
import Helloworld from '../components/header/header_helloworld'
import Hellolongsky from '../components/header/header_longsky'

Vue.use(VueRouter)

const routes = [
  { path: '/helloworld/:id/:paper', component: Helloworld },
  { path: '/hellolongsky', component: Hellolongsky },
  { path: '/hellotest', component: Helloworld }
]

export default new VueRouter({
	routes
})