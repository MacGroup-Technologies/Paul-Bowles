import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref("light")
  const loading = ref(true)
  const error = ref(null) as unknown;
  
  function updateError(newVal: unknown) {
    error.value = newVal
  }

  function updateLoading(newVal: boolean) {
    loading.value = newVal
  }

  function updateTheme(newVal: string) {
    localStorage.setItem("theme", newVal)
    theme.value = newVal
  }

  return { theme, loading, error, updateTheme, updateLoading, updateError }
})