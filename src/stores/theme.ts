import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref("light");
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
  }

  return { theme, loading, error, modal, updateTheme, updateLoading, updateError, setModal }
})