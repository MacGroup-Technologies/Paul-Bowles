<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '../stores/theme'
import { gsap } from 'gsap'

const route = useRoute()
const menutoggler = ref(false)
const themeStore = useThemeStore()
const tl = gsap.timeline()
const links = [
  { title: 'music', link: 'music' },
  { title: 'translation', link: 'translation' },
  { title: 'library', link: 'library' },
  { title: 'chronology', link: 'chronology' },
  { title: 'photography', link: 'photography' },
  { title: 'writings', link: 'writings' },
  { title: 'moroccan music', link: 'moroccan-music' },
  { title: 'archives', link: 'archives' },
  { title: 'on paul bowles', link: 'paul-bowles' },
  { title: 'two clips', link: 'clips' },
  { title: 'contact', link: 'contact' }
]

watch(() => route.name, () => {
  menutoggler.value = false
})

watch(menutoggler, () => {
  if (menutoggler.value) {
    tl.to('.menu', { autoAlpha: 1, display: 'flex' })
  } else {
    tl.to('.menu', { autoAlpha: 0, display: 'none' })
  }
})

onMounted(() => {
  tl.to('.menu', { autoAlpha: 0 })
})
</script>
<template>
  <div
    class="bg-background-light dark:bg-background-dark text-[#545455] dark:text-white-shade min-h-screen flex flex-col justify-between transition-colors"
  >
    <div class="">
      <header
        class="fixed top-0 right-0 left-0 z-50 backdrop-blur-xl md:backdrop-blur-sm bg-background-light dark:bg-background-dark bg-opacity-30 dark:bg-opacity-30 transition-all"
      >
        <div class="flex justify-between items-center p-5 lg:px-16 2xl:px-20">
          <input type="checkbox" id="menutoggler" v-model="menutoggler" class="hidden" />
          <div class="relative transition w-40 overflow-hidden">
            <label class="flex items-center gap-3 cursor-pointer hamburger" for="menutoggler">
              <span class="hidden md:block">{{ menutoggler ? 'Close' : 'Menu' }}</span>
              <div class="flex flex-col items-center justify-center gap-2">
                <div class="px-8 pt-[2px] bg-black dark:bg-white-shade rounded hamburger__line" />
                <div class="px-8 pt-[2px] bg-black dark:bg-white-shade rounded hamburger__line" />
              </div>
            </label>
          </div>
          <router-link to="/">
            <icon-logo class="h-10" />
          </router-link>
          <div class="flex justify-between rounded-3xl p-1 bg-black dark:bg-background-light">
            <div
              class="flex items-center justify-center rounded-3xl dark:cursor-pointer transition-opacity"
              @click="themeStore.updateTheme('light')"
            >
              <icon-sun class="h-7 opacity-0 dark:opacity-100" />
            </div>
            <div
              class="bg-background-light rounded-3xl cursor-pointer dark:cursor-default transition-opacity"
              @click="themeStore.updateTheme('dark')"
            >
              <icon-moon class="h-7 opacity-100 dark:opacity-0" />
            </div>
          </div>
        </div>
        <div class="hidden p-5 lg:px-16 2xl:px-20 flex-wrap flex-col md:flex-row gap-5 flex-gap-y-5 menu">
          <router-link
            :to="'/' + link.link"
            class="md:w-44 capitalize text-xl text-black dark:text-white-shade hover:text-primary dark:hover:text-primary"
            v-for="link in links"
            :key="link.title"
          >
            {{ link.title }}
          </router-link>
        </div>
      </header>
      <router-view />
    </div>
    <footer class="flex flex-col md:flex-row gap-5 justify-between p-5 lg:px-16 2xl:px-20 lg:py-16 lg:text-2xl">
      <p class="">Powered by <a href="#" class="underline">MacGroup Technologies</a></p>
      <div class="flex gap-10">
        <router-link
          to=""
          class="hover:text-primary hover:scale-x-110 hover:transform font-semibold"
          >Privacy Policy</router-link
        >
        <router-link
          to=""
          class="hover:text-primary hover:scale-x-110 hover:transform font-semibold"
          >Cookie Policy</router-link
        >
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  &:hover &__line {
    padding: 2px 20px 0;
    margin: 0 auto;
  }

  &__line {
    transition: all 0.3s ease-in-out;
  }
}

#menutoggler {
  &:checked ~ .relative label div .hamburger__line {
    &:nth-of-type(odd) {
      display: none;
    }
  }
}
</style>
