<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <hello-world />
    <p>Current theme source: <strong id="theme-source">System</strong></p>

    <button id="toggle-dark-mode">
      Toggle Dark Mode
    </button>
    <button id="reset-to-system">
      Reset to System Theme
    </button>
  </div>
</template>
