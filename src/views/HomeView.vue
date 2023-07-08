<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

const hover = ref('')
const animate = ref('')
const links = [
  { title: 'music', link: 'music', animate: 'music' },
  { title: 'translation', link: 'translation', animate: 'library' },
  { title: 'library', link: 'library', animate: 'library' },
  { title: 'chronology', link: 'chronology', animate: 'chronology' },
  { title: 'memorabilia', link: 'memorabilia', animate: 'memorabilia' },
  { title: 'writings', link: 'writings', animate: 'writing' },
  { title: 'moroccan music', link: 'moroccan-music', animate: 'music' },
  { title: 'photography', link: 'photography', animate: 'photography' },
  { title: 'on paul bowles', link: 'paul-bowles', animate: 'clips' },
  { title: 'two clips', link: 'clips', animate: 'clips' },
  { title: 'contact', link: 'contact', animate: 'chronology' }
]

let imgs:HTMLAllCollection

const tl = gsap.timeline()
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
    count = imgs.length * 10,
    i;
  for (i = 0; i < count; i++) {
    if (imgs[i] !== undefined) {
      tl
        .to(imgs[i], { autoAlpha: 0 }, "+=2")
        .addLabel(imgs[i].getAttribute('data-animate'));
      tl.to(imgs[i + 1], { autoAlpha: 1 }, '>')
    } else {
      tl
        .to(wrap(i), { autoAlpha: 0 }, "+=2")
        .to(wrap(i + 1), { autoAlpha: 1 }, '>')
    }
  }
}

watchEffect(() => {
  if (hover.value !== "") {
    textTl.play()
    textTl
      .to('#heading', { fontSize: '25.83px', marginBottom: 10, duration: 0.2 }, 0)
      .to('#logo', { height: '38px', duration: 0.2 }, 0);
    tL.reverse()
    const el = document.querySelectorAll(`[data-animate="${animate.value}"]`)[0]
    console.log("Tween should go to:", animate.value)
    console.log("Image to show at this animate value: ", el)
    tl.seek(animate.value)
    tl.paused(true)
  } else {
    console.log("Reversing textTl")
    textTl.reverse()
    tl.play()
  }
})

onMounted(() => {
  playBackground()
})
</script>

<template>
  <main class="h-screen bg-black text-white">
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
      class="absolute top-0 right-0 left-0 bottom-0 z-50 bg-black/80 p-20 flex flex-col justify-between"
    >
      <div class="2xl:mt-20">
        <h1
          class="font-heading font-bold uppercase text-white text-8xl 2xl:text-9xl mb-5"
          id="heading"
        >
          The Artist’s Legacy
        </h1>
        <img src="@/assets/imgs/logo.svg" class="w-auto h-16 2xl:h-28" id="logo" />
      </div>
      <div clas="mt-10" v-if="hover">
        <div class="" v-if="hover === 'music'">
          <h2 class="font-serif text-[66px] uppercase">Music</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'contact'">
          <h2 class="font-serif text-[66px] uppercase">Contact</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'chronology'">
          <h2 class="font-serif text-[66px] uppercase">Chronology</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'translation'">
          <h2 class="font-serif text-[66px] uppercase">Translation</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'memorabilia'">
          <h2 class="font-serif text-[66px] uppercase">Memorabilia</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            “A night with thunder in the sky he packed his bag and left,” Paul Bowles wrote...
          </p>
        </div>
        <div class="" v-else-if="hover === 'writings'">
          <h2 class="font-serif text-[66px] uppercase">Writings</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'moroccan-music'">
          <h2 class="font-serif text-[66px] uppercase">Moroccan Music</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'clips'">
          <h2 class="font-serif text-[66px] uppercase">Two clips</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'paul-bowles'">
          <h2 class="font-serif text-[66px] uppercase">on paul bowles</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else-if="hover === 'photography'">
          <h2 class="font-serif text-[66px] uppercase">photography</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
        <div class="" v-else>
          <h2 class="font-serif text-[66px] uppercase">library</h2>
          <p class="text-primary text-[27px] 2xl:text-[37px] w-1/2 2xl:w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit metus erat.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-y-5 w-5/6 2xl:w-full mr-40">
        <div class="2xl:w-72 capitalize" v-for="(item, index) in links" :key="index">
          <router-link
            class="px-5 hover:opacity-70 text-[18px] 2xl:text-[23px] text-white-shade hover:text-primary transition-colors"
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
