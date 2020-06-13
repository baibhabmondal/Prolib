import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./components/Outer/signUp.vue')
    },
    {
      path: '/:user',
      props: true,
      component: () => import('./components/Inner/landing.vue'),
      beforeEnter: (to, from, next) => {
        if(localStorage.id)  {
          next()
        } else {
          next('/')
        }
      },
      children: [
        {
          path: '/',
          name: 'feed',
          component: () => import('./components/Inner/Common/home.vue')
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('./components/Inner/Projects/projects.vue')
        },
        {
          path: 'bookmarks',
          name: 'bookmarks',
          component: () => import('./components/Inner/User/bookmarks.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('./components/Inner/User/profile.vue')
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('./components/Inner/Common/events.vue')
        },
        {
          path: 'ClubsandTeams',
          name: 'ClubsandTeams',
          component: () => import('./components/Inner/Common/ClubsandTeams.vue')
        },
        {
          path: 'popularProjects',
          name: 'popularProjects',
          component: () => import('./components/Inner/Projects/popularProjects.vue')
        },
        {
          path: 'notifications',
          name: 'notification',
          component: () => import('./components/Inner/Requests_notifications/notifications.vue')
        },
        {
          path: 'requests',
          name: 'request',
          component: () => import('./components/Inner/Requests_notifications/requests.vue')
        },

        {
          path: 'read/:id',
          props: true,
          name: 'project',
          component: () => import('./components/Inner/Projects/project.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: () => import('./components/Outer/login.vue')
    }
  ]
})
