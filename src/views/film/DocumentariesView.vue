<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Works and Documentaries on Paul Bowles` })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-4xl font-heading uppercase">
          A short selection of films based on Paul Bowles's works and documentaries on Paul Bowles
        </h1>
        <router-link to="/clips" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <ul class="mt-10">
        <li class="mb-5">
          <div class="md:flex gap-3">
            <h2 class="font-bold">The Sheltering Sky</h2>
            <p class="">&mdash; Bermado Bertolucci (1990)</p>
          </div>
        </li>
        <li class="mb-5">
          <div class="">
            <b>Halfmoon (a tryptic based on “The Story of Lahcen and Idir”, “Call at Corazón”, and “Allal”)</b>
            - Frieder Schleich (1995)
          </div>
        </li>
        <li class="mb-5">
          <div class="">
            <b>The Sky Trembles and the Earth is Afraid (based on “A distant Episode”)</b>
            - Ben Rivers (2015)
          </div>
        </li>
      </ul>
      <h2 class="font-bold mt-14">Documentaries on Paul Bowles:</h2>
      <ul class="mt-5">
        <li class="mb-5">
          <div class=""><b>Paul Bowles in Morocco</b> &mdash; Gary Conklin (1970)</div>
        </li>
        <li class="mb-5"><b>Let It Come Down: The Life of Paul Bowles</b> &mdash; Jennifer Baichwal (1998)</li>
        <li class=""><b>The Cage's Door Is Always Open</b> &mdash; Daniel Young (2012)</li>
      </ul>
    </div>
  </div>
</template>
