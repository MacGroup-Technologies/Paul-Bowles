import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

import HomeView from '../views/HomeView.vue'
import { token } from '../utils/constant.js'

function guard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  if (localStorage.getItem(token)) return next();
  return next("/admin-login");
}

function setLoading() {
  useThemeStore().updateLoading(true);
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
          component: () => import('../views/music/IndexView.vue'),
          beforeEnter: setLoading
        },
        {
          path: "/music/:title",
          name: "PaulBowlesMusicPage",
          component: () => import('../views/music/MusicView.vue'),
          beforeEnter: setLoading
        },
        {
          path: "/music/book/:title",
          name: "BookMusicPage",
          component: () => import('../views/music/BookMusicView.vue'),
          beforeEnter: setLoading
        },
        {
          path: "/music/music/:title",
          name: "MusicMusicPage",
          component: () => import('../views/music/MusicMusicView.vue'),
          beforeEnter: setLoading
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
        },
        {
          path: "/translation",
          name: "TranslationPage",
          component: () => import('../views/translations/IndexView.vue')
        },
        {
          path: "/translation/list",
          name: "TranslationListPage",
          component: () => import('../views/translations/ListView.vue'),
          beforeEnter: setLoading
        },
        {
          path: "/clips",
          name: "FilmsIndex",
          component: () => import('../views/film/IndexView.vue'),
        },
        {
          path: "/clips/two-clips",
          name: "TwoClips",
          component: () => import("../views/film/TwoClipsView.vue"),
          beforeEnter: setLoading
        },
        {
          path: "/clips/documentaries",
          name: "DocumentariesClips",
          component: () => import("../views/film/DocumentariesView.vue")
        },
        {
          path: "/chronology",
          name: "ChronologyView",
          component: () => import("../views/ChronologyView.vue")
        },
        {
          path: "/paul-bowles",
          name: "PaulBowlesView",
          component: () => import("../views/on paul bowles/IndexView.vue")
        },
        {
          path: "/paul-bowles/patricia-highsmith",
          name: "PaulBowlesPatriciaView",
          component: () => import("../views/on paul bowles/PatriciaView.vue")
        },
        {
          path: "/paul-bowles/tennessee-williams",
          name: "PaulBowlesTennesseeView",
          component: () => import("../views/on paul bowles/TennesseeView.vue")
        },
        {
          path: "/paul-bowles/allen-ginsberg",
          name: "PaulBowlesAllenView",
          component: () => import("../views/on paul bowles/AllenView.vue")
        },
        {
          path: "/paul-bowles/william-burroughs",
          name: "PaulBowlesWilliamView",
          component: () => import("../views/on paul bowles/WilliamView.vue")
        },
        {
          path: "/paul-bowles/gore-vidal",
          name: "PaulBowlesGoreView",
          component: () => import("../views/on paul bowles/GoreView.vue")
        },
        {
          path: "/paul-bowles/james-purdy",
          name: "PaulBowlesJamesView",
          component: () => import("../views/on paul bowles/JamesView.vue")
        },
        {
          path: "/paul-bowles/rey-rosa",
          name: "PaulBowlesRosaView",
          component: () => import("../views/on paul bowles/RosaView.vue")
        },
        {
          path: "/paul-bowles/the-economist-obituary",
          name: "PaulBowlesObituaryView",
          component: () => import("../views/on paul bowles/ObituaryView.vue")
        },
        {
          path: "/photography",
          name: "PhotographyView",
          component: () => import("../views/photography/IndexView.vue"),
          beforeEnter: setLoading
        },
        {
          path: "/photography/:title",
          name: "PhotographyItemView",
          component: () => import("../views/photography/ItemView.vue"),
          beforeEnter: setLoading
        },
        {
          path: "/moroccan-music",
          name: "MorrocanView",
          component: () => import("../views/MorrocanMusicView.vue"),
          beforeEnter: setLoading
        },
        {
          path: "/contact",
          name: "ContactUsView",
          component: () => import("../views/ContactUsView.vue"),
        },
        {
          path: "/writings",
          name: "WritingsIndexView",
          component: () => import("../views/writings/IndexView.vue"),
        },
        {
          path: "/writings/list",
          name: "WritingsListView",
          component: () => import("../views/writings/ListView.vue"),
        },
        {
          path: "/writings/:title",
          name: "WritingsView",
          component: () => import("../views/writings/WritingView.vue"),
          beforeEnter: setLoading
        },
        {
          path: "/writings/music-criticism/:title",
          name: "CriticismView",
          component: () => import("../views/writings/CriticismView.vue")
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
          beforeEnter: guard,
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
});


export default router
