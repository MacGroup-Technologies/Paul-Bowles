<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useThemeStore } from '../stores/theme';
import { gsap } from 'gsap';

const menutoggler = ref(false)
const themeStore = useThemeStore()
const tl = gsap.timeline()

watch(menutoggler, () => {
  if (menutoggler.value) {
    tl.to(".menu", { autoAlpha: 1 })
      .to(".hamburger__line:first-of-type", { autoAlpha: 0 }, 0)
      .to("hamburger__line:nth-of-type(2)", { y: "10px" })
  } else {
    tl.to(".menu", { autoAlpha: 0 })
  }
})

onMounted(() => {
  tl.to(".menu", { autoAlpha: 0 })
})

</script>
<template>
  <div
    class="bg-background-light dark:bg-background-dark dark:text-white-shade min-h-screen flex flex-col justify-between transition-colors"
  >
    <div class="">
      <header
        class="flex justify-between items-center p-5 lg:px-16 2xl:px-20 fixed top-0 right-0 left-0 backdrop-blur-sm bg-transparent"
      >
        <input type="checkbox" id="menutoggler" v-model="menutoggler" class="hidden" />
        {{ menutoggler }}
        <div class="relative transition">
          <label class="flex items-center gap-3 cursor-pointer" for="menutoggler">
            {{ menutoggler ? 'Close' : 'Menu' }}
            <div class="flex flex-col gap-3 hamburger">
              <div class="px-8 pt-1 bg-black dark:bg-white-shade rounded hamburger__line" />
              <div class="px-8 pt-1 bg-black dark:bg-white-shade rounded hamburger__line" />
            </div>
          </label>
        </div>
        <div
          class="absolute p-5 lg:px-16 2xl:px-20 flex flex-wrap top-16 right-0 left-0 bg-transparent backdrop-blur-sm menu z-10"
        >
          <div class="" v-for="i in 7" :key="i">Link</div>
        </div>
        <router-link to="/">
          <iconLogo class="h-10" />
        </router-link>
        <div class="flex justify-between rounded-3xl p-1 bg-black dark:bg-background-light">
          <div class="flex items-center justify-center rounded-3xl cursor-pointer transition-opacity" @click="themeStore.updateTheme('light')">
            <icon-sun class="h-7 opacity-0 dark:opacity-100" />
          </div>
          <div class="bg-background-light rounded-3xl cursor-pointer transition-opacity" @click="themeStore.updateTheme('dark')">
            <icon-moon class="h-7 opacity-100 dark:opacity-0" />
          </div>
        </div>
      </header>
      <router-view />
    </div>
    <footer class="flex justify-between p-5">
      <p class="">Powered by <a href="#" class="underline">MacGroup Technologies</a></p>
    </footer>
  </div>
</template>

<!-- <style lang="scss" scoped>
#menutoggler {
  &:checked ~ .menu {
    display: flex!important;
  }
}
</style> -->
