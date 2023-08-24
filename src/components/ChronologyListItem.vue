<script lang="ts" setup>
import { ref } from 'vue';
  defineProps({
    item: {
      type: Object,
      required: true
    }
  })

  const opened = ref(false);
</script>
<template>
  <div class="flex justify-end mb-8 gap-10 overflow-hidden">
    <a :name="item.year" />
    <h2 class="font-heading text-3xl md:text-6xl font-bold">{{ item.year }}</h2>
    <div class="w-[80vw] md:w-1/2 h-auto overflow-hidden cursor-pointer text-md" @click="opened = !opened">
      <p v-html="item.text" class="transition-all" :class="{ 'line-clamp-2' : !opened}" />
      <pre class="my-5 text-primary transition-all" v-if="opened">{{ item.highlight }}</pre>
    </div>
    <icon-plus :opened="opened" @click="opened = !opened" />
  </div>
</template>