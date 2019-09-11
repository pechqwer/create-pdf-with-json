import Vue from 'vue'
import Router from 'vue-router'
import home from '../src/App.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'permission',
      component: home,
    },
  ],
})

export default router
