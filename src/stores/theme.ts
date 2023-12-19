import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  let default_theme = "light"

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    default_theme = "dark"
  }


  const theme = ref(default_theme);
  const loading = ref(false);
  const error = ref(null) as any;
  const modal = ref(true);
  
  function setModal(newVal: boolean) {
    modal.value = newVal;
  }

  function updateError(newVal: string) {
    error.value = newVal
  }

  function updateLoading(newVal: boolean) {
    loading.value = newVal
  }

  function updateTheme(newVal: string) {
    theme.value = newVal
    localStorage.theme = newVal

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }

  return { theme, loading, error, modal, updateTheme, updateLoading, updateError, setModal }
})
