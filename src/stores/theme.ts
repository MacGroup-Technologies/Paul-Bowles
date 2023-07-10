import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref("light")
  
  function updateTheme(newVal: string) {
    localStorage.setItem("theme", newVal)
    theme.value = newVal
  }

  return { theme, updateTheme }
})