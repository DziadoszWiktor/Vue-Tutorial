import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue')
    },
    {
        path: '/home', // add a separate route for "/home"
        redirect: { name: 'Home' } // redirect to the "Home" route
      },{
      path: '/ref',
      name: 'Ref',
      component: () => import('./views/RefView.vue')
    },{
      path: '/directives',
      name: 'Directives',
      component: () => import('./views/DirectiveView.vue')
    },{
      path: '/computed',
      name: 'Computed',
      component: () => import('./views/ComputedView.vue')
    },{
      path: '/watch',
      name: 'Watch',
      component: () => import('./views/WatchView.vue')
    },{
      path: '/componentst',
      name: 'Components',
      component: () => import('./views/ComponentsView.vue')
    },{
      path: '/about',
      name: 'About',
      component: () => import('./views/AboutView.vue')
    },{ 
      path: "/:pathMatch(.*)*", 
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue') 
    }
  ]
})