<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: "On Paul Bowles Music" })

const route = useRouter()

const music = [
  'Leonard Bernstein',
  'Paul Bowles, Composer',
  'Virgil Thompson - Twelfth Night',
  'Rey Rosa - The Return Trip',
  'Lincoln Center Tribute',
]
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">on paul bowles music</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div class="my-10">
        <p>A selection of texts on the music of Paul Bowles</p>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-20 2xl:gap-48 justify-between py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl text-center">
          <router-link :to="'/music/on-paul-bowless-music/' + encodeURI(item)" class="flex flex-col items-center gap-3"
            v-for="(item, index) in music" :key="index">
            <div class="bg-primary-light w-80 px-20 py-28 rounded-md flex justify-center items-center">
              <icon-musical />
            </div>
            {{ item }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
