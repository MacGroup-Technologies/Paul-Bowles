import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import { token } from '../utils/constant.js'

function guard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  if (localStorage.getItem(token)) return next();
  return next("/admin-login");
}

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
      path: "/",
      component: () => import("../views/Admin/BaseView.vue"),
      children: [
        {
          path: "/admin",
          name: "AdminIndex",
          // beforeEnter: guard,
          component: () => import("../views/Admin/IndexPage.vue")
        },
        {
          path: "/upload",
          name: "AdminUpload",
          component: () => import("../views/Admin/IndexPage.vue")
        }
      ]
    },
    {
      path: "/admin-login",
      name: "AuthPage",
      component: () => import("../views/Admin/AuthPage.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
