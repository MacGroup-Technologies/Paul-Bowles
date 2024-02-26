<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { onMounted, reactive, watchEffect, ref, computed } from 'vue'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
// @ts-ignore
import breakpoints from '@/utils/breakpoints.js'
import { useHead } from '@unhead/vue'
import { useThemeStore } from '../stores/theme'

useHead({ title: 'Paul Bowles' })

gsap.registerPlugin(CSSPlugin)

const hover = reactive({
  animate: '',
  item: {
    title: '',
    text: '',
    image: ''
  }
})
const links = [
  {
    title: 'life',
    link: 'life',
    image: 'Life',
    text: 'A night with thunder in the sky he packed his bag and left…'
  },
  {
    title: 'music',
    link: 'music',
    image: 'Music',
    text: 'Bowles composed orchestral works, piano pieces, and  numerous songs.'
  },
  {
    title: 'writings',
    link: 'writings',
    image: 'Writings',
    text: '“His short stories are among the best ever written by an American.” Gore Vidal'
  },
  {
    title: 'translations',
    link: 'translation',
    image: 'Translation',
    text: 'Paul Bowles translated into English numerous works from the French, Spanish and Moghrebi.'
  },
  {
    title: 'moroccan music',
    link: 'moroccan-music',
    image: 'MoroccanMusic',
    text: 'In 1959 Paul Bowles traveled extensively across Morocco recording its traditional music.'
  },
  {
    title: 'photography',
    link: 'photography',
    image: 'Photography',
    text: 'A selection of travel photography by Bowles, and portraits of Bowles, relatives, and friends.'
  },
  {
    title: 'library',
    link: 'library',
    image: 'Library',
    text: 'Books, journals, magazines collected during the five decades he lived in Tangier.'
  },
  {
    title: 'on paul bowles',
    link: 'paul-bowles',
    image: 'PaulBowles',
    text: 'Highsmith, Williams, Ginsberg, Burroughs, Purdy, Vidal, and Rey Rosa on Paul Bowles.'
  },
  {
    title: 'archives',
    link: 'archives',
    image: 'Archive',
    text: 'Scores, manuscripts, letters—and links to archival collections at the universities of Delaware and Texas.'
  },
  {
    title: 'film',
    link: 'clips',
    image: 'Film',
    text: 'Excerpts from a documentary and an experimental film, and a selected filmography.'
  },
  { title: 'contact', link: 'contact', image: 'contact', text: '' }
]

let imgs: any

const tl = gsap.timeline().repeat(-1)
const tL = gsap.timeline()
const textTl = gsap.timeline()
const modal = computed(() => {
  return useThemeStore().modal
})

const setModal = function () {
  useThemeStore().setModal(false)
}

const mouseHover = function (e: any) {
  if (e === null) {
    ; (hover.animate = ''), (hover.item = { title: '', text: '', image: '' })
  } else {
    setTimeout(() => {
      hover.item = e
      hover.animate = e.title
    }, 100)
  }
}

const playBackground = function () {
  let img = gsap.utils.toArray('img.jumbo')
  img.reverse()
  imgs = img
  let wrap = gsap.utils.wrap(imgs),
    count = imgs.length,
    i
  for (i = 0; i < count - 1; i++) {
    if (imgs[i]) {
      tl.to(imgs[i], { autoAlpha: 0 }, '+=2').addLabel(imgs[i].getAttribute('data-animate'), '+=2')
      tl.to(imgs[i + 1], { autoAlpha: 1 }, '>')
    } else {
      tl.to(imgs[i], { autoAlpha: 0 }, '>')
      tl.to(imgs[i + 1], { autoAlpha: 1 }, '<')
    }
  }
}

watchEffect(() => {
  if (hover.animate !== '') {
    tl.paused(true)
    textTl.play()
    textTl
      .to(
        '#heading',
        { fontSize: breakpoints.mdAndUp ? '25.83px' : '20px', marginBottom: 10, duration: 0.2 },
        0
      )
      .to('#logo', { height: breakpoints.mdAndUp ? '38px' : '25px', duration: 0.2 }, 0)
    tL.reverse()
  } else {
    textTl.reverse()
    tl.play()
  }
})

onMounted(() => {
  playBackground()
  setTimeout(() => {
    setModal()
  }, 5000)
})
</script>

<template>
  <main class="h-screen text-white">
    <div id="img">
      <img src="@/assets/imgs/Paul-on-Keyboard.png" class="fixed min-h-screen w-screen inset-0 object-cover jumbo"
        id="hero1" data-animate />
      <img src="@/assets/imgs/Young-Paul.png" class="fixed min-h-screen w-screen inset-0 object-cover jumbo" id="hero1"
        data-animate />
      <img src="@/assets/imgs/Paul-arms-wide.png" class="fixed min-h-screen w-screen inset-0 object-cover jumbo"
        id="hero1" data-animate />
    </div>
    <img src="@/assets/imgs/Music-doutone.png"
      class="fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'music' ? 'opacity-100' : 'opacity-0'" v-if="hover.animate === 'music'" />
    <img src="@/assets/imgs/Translation-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'translation' ? 'opacity-100' : 'opacity-0'"
      v-else-if="hover.animate === 'translation'" />
    <img src="@/assets/imgs/Photography-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'photography' ? 'opacity-100' : 'opacity-0'"
      v-else-if="hover.animate === 'photography'" />
    <img src="@/assets/imgs/Life-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'life' ? 'opacity-100' : 'opacity-0'" v-else-if="hover.animate === 'life'" />
    <img src="@/assets/imgs/Archive-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'archives' ? 'opacity-100' : 'opacity-0'" v-else-if="hover.animate === 'archives'" />
    <img src="@/assets/imgs/Writings-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'writings' ? 'opacity-100' : 'opacity-0'" v-else-if="hover.animate === 'writings'" />
    <img src="@/assets/imgs/MoroccanMusic-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'moroccan music' ? 'opacity-100' : 'opacity-0'"
      v-else-if="hover.animate === 'moroccan music'" />
    <img src="@/assets/imgs/Library-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'library' ? 'opacity-100' : 'opacity-0'" v-else-if="hover.animate === 'library'" />
    <img src="@/assets/imgs/PaulBowles-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'on paul bowles' ? 'opacity-100' : 'opacity-0'"
      v-else-if="hover.animate === 'on paul bowles'" />
    <img src="@/assets/imgs/Film-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'film' ? 'opacity-100' : 'opacity-0'" v-else-if="hover.animate === 'film'" />
    <img src="@/assets/imgs/Contact-doutone.png"
      class="12fixed min-h-screen w-screen inset-0 object-cover jumbo transition-opacity"
      :class="hover.animate === 'contact' ? 'opacity-100' : 'opacity-0'" v-else-if="hover.animate === 'contact'" />
    <div class="absolute top-0 right-0 left-0 bottom-0 z-50 p-10 md:p-20 flex flex-col justify-between">
      <div class="mt-10 2xl:mt-20">
        <h1 class="font-heading font-bold uppercase text-white text-6xl md:text-8xl 2xl:text-9xl mb-5" id="heading">
          The Artist’s Legacy
        </h1>
        <img src="@/assets/imgs/logo.svg" class="w-auto h-12 md:h-16 2xl:h-28" id="logo" />
      </div>
      <div clas="mt-10" v-if="hover.animate">
        <h2 class="font-heading text-[30px] md:text-[66px] uppercase">{{ hover.item.title }}</h2>
        <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-2/3 text-justify 2xl:w-1/3">
          {{ hover.item.text }}
        </p>
      </div>
      <div class="hidden md:flex flex-wrap gap-x-10 gap-y-5 w-full md:w-5/6 2xl:w-full mr-40">
        <div class="capitalize text-left" v-for="(item, index) in links" :key="index">
          <router-link
            class="inline-block hover:opacity-70 text-[20px] 2xl:text-[40px] md:min-w-[150px] text-white-shade transition-colors"
            :to="`/${item.link}`" @mouseover="mouseHover(item)" @mouseout="mouseHover(null)">
            {{ item.title }}
          </router-link>
        </div>
      </div>
      <div class="flex md:hidden flex-wrap gap-x-5 md:gap-x-0 gap-y-5 w-full md:w-5/6 2xl:w-full mr-40">
        <div class="2xl:w-72 capitalize" v-for="(item, index) in links" :key="index">
          <router-link class="px-5 hover:opacity-70 text-[18px] 2xl:text-[23px] text-white-shade transition-colors"
            :to="`/${item.link}`">
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
  <div v-if="modal" class="fixed top-0 right-0 z-50 flex justify-end m-8 items-center">
    <div class="h-auto md:w-1/3 shadow-2xl bg-primary-light rounded-md px-7 py-4 mx-10 md:mx-0">
      <div class="flex justify-end mb-2">
        <div @click="setModal()" class="flex items-center gap-3 cursor-pointer hamburger">
          <span class="block">Close</span>
          <div class="flex flex-col items-center justify-center gap-2">
            <div class="px-6 pt-[2px] bg-black dark:bg-white-shade rounded hamburger__line" />
          </div>
        </div>
      </div>
      <div class="">
        <h1 class="text-3xl font-semibold">Special Feature</h1>
        <p class="mt-3 mb-5 text-xl opacity-75">
          Audio and transcriptions of Paul Bowles’s translations from the Moghrebi are now
          available.
        </p>
        <router-link to="/translation/list?category=From Moghrebi">
          <el-button type="primary" class="bg-primary" style="padding: 20px 25px; border-radius: 8px">Check it
            Out</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
