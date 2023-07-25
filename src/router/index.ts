import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'IndexPage',
      component: () => import('../views/IndexPage.vue'),
      children: [
        {
          path: '/music',
          name: 'musicPage',
          component: () => import('../views/MusicView.vue')
        },
        {
          path: "/music/music",
          name: "PaulBowlesMusicPage",
          component: () => import('../views/MusicMusicView.vue')
        },
        {
          path: '/library',
          name: 'libraryPage',
          component: () => import('../views/LibraryView.vue')
        },
        {
          path: '/library/list',
          name: 'libraryListPage',
          component: () => import('../views/LibraryList.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
