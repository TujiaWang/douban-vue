import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    }
  ]
})