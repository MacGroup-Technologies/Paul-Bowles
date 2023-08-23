<script lang="ts" setup>
  defineProps({
    opened: {
      required: true,
      type: Boolean,
      default() {
        return false
      }
    }
  })
</script>

<template>
  <svg width="75" height="75" viewBox="0 0 75 75" fill="none" class="cursor-pointer">
    <path
      d="M37.5 15.625V59.375"
      class="stroke-background-dark dark:stroke-background-light"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      v-if="!opened"
    />
    <path
      d="M15.625 37.5H59.375"
      class="stroke-background-dark dark:stroke-background-light"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
