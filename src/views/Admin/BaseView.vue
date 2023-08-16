<script lang="ts" setup>
import { useRoute } from "vue-router"
import { adminRoutes } from '@/utils/constant'

const route = useRoute()
</script>
<template>
  <div class="overflow-hidden">
    <div class="flex gap-10 h-screen bg-white">
      <div class="w-1/5 h-full">
        <nav class="bg-black bg-opacity-10 h-full flex flex-col overflow-hidden">
          <div class="h-full">
            <div
              class="h-1/6 flex flex-col justify-center items-center mx-3 border-b border-black"
            >
              <icon-logo class="w-40 text-white" />
            </div>
            <h3 class="uppercase font-semibold text-gray-500 text-sm mx-3 my-5">Navigation links</h3>
            <ul class="">
              <li v-for="routes in adminRoutes" :key="routes.title">
                <router-link
                  :to="routes.link"
                  :class="route.path === routes.link ? 'bg-black text-white-shade' : 'bg-transparent text-black'"
                  class="block p-3 mb-2 border-l-4 border-black hover:bg-black hover:text-white-shade transition-all font-bold text-lg"
                >
                  {{ routes.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="h-auto p-4 bg-red-500 text-white font-semibold cursor-pointer">Log Out</div>
        </nav>
      </div>
      <div class="py-3 relative w-4/5 flex flex-col">
        <div class="h-full">
          <main class="overflow-auto h-full pt-5 pr-10">
            <router-view />
          </main>
        </div>
        <footer class="h-[20px] bg-transparent rounded-2xl text-gray-500">
          Powered By MacGroups Tech.
        </footer>
      </div>
    </div>
  </div>
</template>
