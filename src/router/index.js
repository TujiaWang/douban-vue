import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie/Movie'
import Book from '@/components/Book/Book'
import Status from '@/components/Status/Status'
import Group from '@/components/Group/Group'

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
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/status',
      component: Status
    },
    {
      path: '/group',
      component: Group
    }
  ]
})