import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref()
  const filterLanguage = ref('')

  function setFilterLanguage(payload: string) {
    filterLanguage.value = payload;
  }
  function setUser(payload: string) {
    user.value = payload;
  }

  return { user, setUser, filterLanguage, setFilterLanguage }
})
