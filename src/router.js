import Vue from 'vue'
import Router from 'vue-router'
import PokeList from './views/PokeList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component: PokeList
    }
  ]
})
