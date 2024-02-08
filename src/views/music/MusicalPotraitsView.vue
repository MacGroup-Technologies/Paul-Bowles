<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useRouter } from 'vue-router'
import { fetchMusicalPortraits } from '../../services/music';
import { isEmpty } from 'lodash';

const route = useRouter()
const music = reactive({ items: [] as any[] });

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const fetchMusic = async function () {
  setLoading(true);
  try {
    const response = await fetchMusicalPortraits();
    music.items = response.data.results;
  } catch (error: any) {
    console.log(error)
    setError(error)
  }
  setLoading(false);
}

onMounted(async () => {
  setLoading(false);
  await fetchMusic();
})
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">musical portraits</h1>
        <router-link
          to="#back"
          @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform"
        >
          <icon-back />
        </router-link>
      </div>
      <div class="my-10">
        <p>Two musical portraits of Paul Bowles and an “Anniversary.”</p>
      </div>
      <div class="mb-10">
        <h2 class="uppercase font-heading text-3xl md:text-4xl">Virgil thomson</h2>
        <div class="my-3 flex gap-2 md:gap-0 flex-col md:flex-row items-start md:items-center justify-between" v-if="!isEmpty(music.items)">
          <div class="bg-primary bg-opacity-10 p-2 rounded">
            <svg
              width="31"
              height="31"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_879_9479)">
                <path
                  d="M34.166 3.41699H13.666C11.7868 3.41699 10.2493 4.95449 10.2493 6.83366V27.3337C10.2493 29.2128 11.7868 30.7503 13.666 30.7503H34.166C36.0452 30.7503 37.5827 29.2128 37.5827 27.3337V6.83366C37.5827 4.95449 36.0452 3.41699 34.166 3.41699ZM30.7493 11.9587H25.6243V21.3545C25.6243 23.712 23.711 25.6253 21.3535 25.6253C18.996 25.6253 17.0827 23.712 17.0827 21.3545C17.0827 18.997 18.996 17.0837 21.3535 17.0837C22.3273 17.0837 23.1985 17.4082 23.916 17.9549V8.54199H30.7493V11.9587ZM6.83268 10.2503H3.41602V34.167C3.41602 36.0462 4.95352 37.5837 6.83268 37.5837H30.7493V34.167H6.83268V10.2503Z"
                  fill="#4D5AD6"
                />
              </g>
              <defs>
                <clipPath id="clip0_879_9479">
                  <rect width="41" height="41" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="">
            {{ music.items[0].title }}
          </h3>
          <div class="">
            <audio controlslist="nodownload" class="md:w-96 show-controls">
              <source :src="music.items[0].attachment_url" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <p class="">
          Virgil Thomson (1896-1989) was an American composer and critic. He was instrumental in the
          development of the "American Sound" in classical music.
        </p>
      </div>

      <div class="mb-10">
        <h2 class="uppercase font-heading text-3xl md:text-4xl">Leonard Bernstein</h2>
        <div class="my-3 flex gap-2 md:gap-0 flex-col md:flex-row items-start md:items-center justify-between" v-if="!isEmpty(music.items)">
          <div class="bg-primary bg-opacity-10 p-2 rounded">
            <svg
              width="31"
              height="31"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_879_9479)">
                <path
                  d="M34.166 3.41699H13.666C11.7868 3.41699 10.2493 4.95449 10.2493 6.83366V27.3337C10.2493 29.2128 11.7868 30.7503 13.666 30.7503H34.166C36.0452 30.7503 37.5827 29.2128 37.5827 27.3337V6.83366C37.5827 4.95449 36.0452 3.41699 34.166 3.41699ZM30.7493 11.9587H25.6243V21.3545C25.6243 23.712 23.711 25.6253 21.3535 25.6253C18.996 25.6253 17.0827 23.712 17.0827 21.3545C17.0827 18.997 18.996 17.0837 21.3535 17.0837C22.3273 17.0837 23.1985 17.4082 23.916 17.9549V8.54199H30.7493V11.9587ZM6.83268 10.2503H3.41602V34.167C3.41602 36.0462 4.95352 37.5837 6.83268 37.5837H30.7493V34.167H6.83268V10.2503Z"
                  fill="#4D5AD6"
                />
              </g>
              <defs>
                <clipPath id="clip0_879_9479">
                  <rect width="41" height="41" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="">
            {{ music.items[1].title }}
          </h3>
          <div class="">
            <audio controls controlslist="nodownload" class="md:w-96 show-controls">
              <source :src="music.items[1].attachment_url" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <p class="">
          Leonard Bernstein (1918–1990) was an American conductor, composer, pianist, music
          educator, author, and humanitarian. Considered to be one of the most important conductors
          of his time, he was the first American conductor to receive international acclaim.
        </p>
      </div>

      <div class="mb-10">
        <h2 class="uppercase font-heading text-3xl md:text-4xl">Phillip Ramey</h2>
        <div class="my-3 flex gap-2 md:gap-0 flex-col md:flex-row items-start md:items-center justify-between" v-if="!isEmpty(music.items)">
          <div class="bg-primary bg-opacity-10 p-2 rounded">
            <svg
              width="31"
              height="31"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_879_9479)">
                <path
                  d="M34.166 3.41699H13.666C11.7868 3.41699 10.2493 4.95449 10.2493 6.83366V27.3337C10.2493 29.2128 11.7868 30.7503 13.666 30.7503H34.166C36.0452 30.7503 37.5827 29.2128 37.5827 27.3337V6.83366C37.5827 4.95449 36.0452 3.41699 34.166 3.41699ZM30.7493 11.9587H25.6243V21.3545C25.6243 23.712 23.711 25.6253 21.3535 25.6253C18.996 25.6253 17.0827 23.712 17.0827 21.3545C17.0827 18.997 18.996 17.0837 21.3535 17.0837C22.3273 17.0837 23.1985 17.4082 23.916 17.9549V8.54199H30.7493V11.9587ZM6.83268 10.2503H3.41602V34.167C3.41602 36.0462 4.95352 37.5837 6.83268 37.5837H30.7493V34.167H6.83268V10.2503Z"
                  fill="#4D5AD6"
                />
              </g>
              <defs>
                <clipPath id="clip0_879_9479">
                  <rect width="41" height="41" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="">
            {{ music.items[2].title }}
          </h3>
          <div class="">
            <audio controls controlslist="nodownload" class="md:w-96 show-controls">
              <source :src="music.items[2].attachment_url" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <p class="">
          Phillip Ramey (1939) is an American composer, pianist, and writer on music. His works
          include orchestral compositions, three piano concertos, along with chamber music and many
          pieces for solo piano, among them ten sonatas.
        </p>
      </div>
    </div>
  </div>
</template>
