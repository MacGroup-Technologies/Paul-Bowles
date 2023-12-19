<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import { useThemeStore } from './stores/theme';

import LoadingComponent from "@/components/LoadingComponent.vue"

const theme = computed(() => {
  return useThemeStore().theme
})

const loading = computed(() => {
  return useThemeStore().loading
})


const themeChanger = function () {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

watch(theme, () => { themeChanger() })
onMounted(() => { themeChanger() })
</script>

<template>
  <loading-component v-if="loading" />
  <RouterView />
</template>
