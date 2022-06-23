<script setup lang="ts">
import { isDark } from '~/composables/dark'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <button @click="toggleDark">
    toggleDark
  </button>
</template>
