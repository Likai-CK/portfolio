import Vue from 'vue'
import vueHeadful from 'vue-headful';
import Router from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Code from '@/pages/Code'
import More from '@/pages/More'

Vue.component('vue-headful', vueHeadful); // This is for doing stuff like <title> within router views. Really annoying!
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
})
