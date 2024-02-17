<script lang="ts" setup>
import { useHead } from '@unhead/vue';

const items = ["Short Stories", "Novels", "Travels", "Poetry", "Contributions to Periodicals", "Music Criticism", "Autobiography"]

useHead({ title: "Paul Bowles Writings" })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">writings</h1>
        <router-link to="/writings" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>
    <div class="py-10 lg:px-16 2xl:px-20">
      <ul class="gap-x-5 gap-y-10 max-md:px-2 md:gap-10 w-full">
        <router-link :to="`/writings/${item}`" class="gap-y-5  text-2xl" v-for="(item, index) in items" :key="index">
          <p class="mt-auto hover:underline text-primary pb-10 cursor-pointer"> {{ index + 1 }}. {{ item }} </p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
