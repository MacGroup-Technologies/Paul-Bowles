import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref()
  function setUser(payload: string) {
    user.value = payload;
  }

  return { user, setUser }
})
