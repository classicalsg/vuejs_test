import Vue from 'vue'
import Router from 'vue-router'
import NewPost from '@/components/NewPost'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
