<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import { useThemeStore } from './stores/theme';

const theme = computed(() => {
  return useThemeStore().theme
})


const themeChanger = function() {
  if (
    localStorage.getItem("theme") === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

watch(theme, () => { themeChanger() })
onMounted(() => { themeChanger() })
</script>

<template>
  <RouterView />
</template>
