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
    <div class="w-1/2 h-auto overflow-hidden cursor-pointer text-md" @click="opened = !opened">
      <p v-html="item.text" class="transition-all" :class="{ 'line-clamp-2' : !opened}" />
      <pre class="my-5 text-primary transition-all" v-if="opened">{{ item.highlight }}</pre>
    </div>
    <icon-plus :opened="opened" @click="opened = !opened" />
  </div>
</template>

<style>
pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>