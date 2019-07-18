import Vue from 'vue'
import vueHeadful from 'vue-headful';
import Router from 'vue-router'
import About from '@/pages/About'
import News from '@/pages/News'
import Projects from '@/pages/Projects'
import More from '@/pages/More'
import FirstVisit from '@/pages/FirstVisit'
import PageNotFound from '@/pages/PageNotFound'

import blog from '@/components/Blog'
import blogpost from '@/components/Blogpost'

Vue.component('blog', blog); // doing vue.component is needed for the imports to do anything.
Vue.component('vue-headful', vueHeadful); // This is for doing stuff like <title> within router views. Really annoying!
Vue.use(Router)

export default new Router({
  mode: 'history', // remove hashtag, thanks https://github.com/vuejs/vue-router/issues/2668
  routes: [
    {
      path: '/',
      name: 'FirstVisit',
      component: FirstVisit
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
