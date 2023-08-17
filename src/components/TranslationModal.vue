<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components'
import { ref } from 'vue';

defineProps<{
  item: any
}>()

const img = ref(null)

</script>
<template>
  <div class="z-50 fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex justify-center items-center">
    <OnClickOutside @trigger="$emit('close')">
      <div class="h-[80vh] w-[60vw] bg-background-light dark:bg-background-dark rounded-xl">
        <div
          class="py-5 px-20 inline-flex items-center gap-3 text-black dark:text-white-shade hover:text-opacity-80 cursor-pointer"
          @click="$emit('close')"
        >
          Close <span class="inline-block pt-[2px] w-10 bg-black dark:bg-white-shade" />
        </div>
        <div class="py-3 px-20 grid gap-10 grid-cols-1 md:grid-cols-2 h-[65%]">
          <img :src="img ?? item.cover_image" class="bg-red-500 bg-opacity-20 rounded-2xl w-full h-full" />
          <div class="">
            <h1 class="text-xl font-semibold">{{ item.title }}</h1>
            <p class="mt-3">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="py-3 px-20 grid gap-5 grid-cols-1 md:grid-cols-3 w-[60%]">
          <img
            :src="imgs.image"
            class="bg-primary bg-opacity-20 h-20 rounded-xl cursor-pointer hover:-translate-y-2 transition-transform"
            :class="{ '-translate-y-1' : img == imgs.image }"
            v-for="imgs in item.image"
            :key="imgs.id"
            @click="img = imgs.image"
          />
        </div>
      </div>
    </OnClickOutside>
  </div>
</template>