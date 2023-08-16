<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin';
import breakpoints from "../utils/breakpoints.js";

gsap.registerPlugin(CSSPlugin);

const hover = ref('')
const animate = ref('')
const links = [
  { title: 'music', link: 'music', animate: 'library' },
  { title: 'translation', link: 'translation', animate: 'chronology' },
  { title: 'photography', link: 'photography', animate: 'writing' },
  { title: 'life', link: 'life', animate: 'memorabilia' },
  { title: 'library', link: 'library', animate: 'chronology' },
  { title: 'writings', link: 'writings', animate: 'music' },
  { title: 'moroccan music', link: 'moroccan-music', animate: 'chronology' },
  { title: 'archives', link: 'chronology', animate: 'memorabilia' },
  { title: 'on paul bowles', link: 'paul-bowles', animate: 'memorabilia' },
  { title: 'two clips', link: 'clips', animate: 'photography' },
  { title: 'contact', link: 'contact', animate: 'clips' },
]

let imgs:HTMLAllCollection

const tl = gsap.timeline().repeat(-1)
const tL = gsap.timeline();
const textTl = gsap.timeline();

const mouseHover = function (e: any) {
  hover.value = e.link
  animate.value = e.animate
}

const playBackground = function () {
  let img = gsap.utils.toArray('img.jumbo');
  img.reverse()
  imgs = img;
  let wrap = gsap.utils.wrap(imgs),
    count = imgs.length + 1,
    i;
  for (i = 0; i < count; i++) {
    if(imgs[i]) {
      tl
        .to(imgs[i], { autoAlpha: 0 }, "+=2")
        .addLabel(imgs[i].getAttribute('data-animate'), "+=2");
      tl.to(imgs[i + 1], { autoAlpha: 1 }, '>')
      console.log()
    } else {
      tl
        .to(imgs[i], { autoAlpha: 0 }, ">")
      tl.to(imgs[i + 1], { autoAlpha: 1 }, '<')
    }
  }
}

watchEffect(() => {
  if (hover.value !== "") {
    textTl.play()
    textTl
      .to('#heading', { fontSize: breakpoints.mdAndUp ? '25.83px' : '20px', marginBottom: 10, duration: 0.2 }, 0)
      .to('#logo', { height: breakpoints.mdAndUp ? '38px' : '25px', duration: 0.2 }, 0);
    tL.reverse()
    tl.seek(animate.value)
    tl.paused(true)
  } else {
    textTl.reverse()
    tl.play()
  }
})

onMounted(() => {
  playBackground()
})
</script>

<template>
  <main class="h-screen bg-primary text-white">
    <div id="img">
      <img
        src="@/assets/imgs/imagehero.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero1"
        data-animate="clips"
      />
      <img
        src="@/assets/imgs/imagehero-1.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero2"
        data-animate="photography"
      />
      <img
        src="@/assets/imgs/imagehero-3.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero4"
        data-animate="writing"
      />
      <img
        src="@/assets/imgs/imagehero-4.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero5"
        data-animate="music"
      />
      <img
        src="@/assets/imgs/imagehero-5.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero6"
        data-animate="library"
      />
      <img
        src="@/assets/imgs/imageimage.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero6"
        data-animate="chronology"
      />
      <img
        src="@/assets/imgs/imagehero-2.png"
        class="absolute top-0 left-0 w-full h-full object-cover jumbo"
        id="hero3"
        data-animate="memorabilia"
      />
    </div>
    <div
      class="absolute top-0 right-0 left-0 bottom-0 z-50 bg-primary/75 p-10 md:p-20 flex flex-col justify-between"
    >
      <div class="mt-10 2xl:mt-20">
        <h1
          class="font-heading font-bold uppercase text-white text-6xl md:text-8xl 2xl:text-9xl mb-5"
          id="heading"
        >
          The Artist’s Legacy
        </h1>
        <img src="@/assets/imgs/logo.svg" class="w-auto h-12 md:h-16 2xl:h-28" id="logo" />
      </div>
      <div clas="mt-10" v-if="hover">
        <div class="" v-if="hover === 'music'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Music</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            This section contains the amazing musical compositions of Paul Bowles, encompassing a lot of genres.
          </p>
        </div>
        <div class="" v-else-if="hover === 'contact'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Contact</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            We value your feedback, questions, and suggestions
          </p>
        </div>
        <div class="" v-else-if="hover === 'chronology'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Chronology</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            December 30, 1910 - November 18th, 1999
          </p>
        </div>
        <div class="" v-else-if="hover === 'translation'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Translation</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Bowles translated into English many French, Spanish, and Moghrebi works.
          </p>
        </div>
        <div class="" v-else-if="hover === 'memorabilia'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Memorabilia</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            “A night with thunder in the sky he packed his bag and left,” Paul Bowles wrote...
          </p>
        </div>
        <div class="" v-else-if="hover === 'writings'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Writings</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Paul Bowles: masterful storyteller, skilled writer, connoisseur of words.
          </p>
        </div>
        <div class="" v-else-if="hover === 'moroccan-music'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Moroccan Music</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            A creative mind and love for Morocco culminated in the creation of these amazing pieces of Moroccan music.
          </p>
        </div>
        <div class="" v-else-if="hover === 'clips'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">Two clips</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Paul Bowles was a source of inspiration for many filmmakers with his works influencing numerous movies and  documentaries.
          </p>
        </div>
        <div class="" v-else-if="hover === 'paul-bowles'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">on paul bowles</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            “A night with thunder in the sky he packed his bag and left,” Paul Bowles wrote...
          </p>
        </div>
        <div class="" v-else-if="hover === 'photography'">
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">photography</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            This section shows his brilliance with the lens, showcasing his greatness beyond the realm of words.
          </p>
        </div>
        <div class="" v-else>
          <h2 class="font-heading text-[30px] md:text-[66px] uppercase">library</h2>
          <p class="text-black text-[18px] md:text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Explore Paul Bowles's library of over 3,000 volumes collected during the five decades he lived in Tangier.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-x-5 md:gap-x-0 gap-y-5 w-full md:w-5/6 2xl:w-full mr-40">
        <div class="2xl:w-72 capitalize" v-for="(item, index) in links" :key="index">
          <router-link
            class="px-5 hover:opacity-70 text-[18px] 2xl:text-[23px] text-white-shade transition-colors"
            :to="`/${item.link}`"
            @mouseover="mouseHover(item)"
            @mouseout="hover = ''"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
