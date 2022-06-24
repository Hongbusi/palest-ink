<script setup lang="ts">
type ThemeMode = 'dark' | 'light'
const themeMode = ref<ThemeMode>()

const initThemeMode = async () => {
  const isDarkMode: any = await window.getDarkMode()
  themeMode.value = isDarkMode ? 'dark' : 'light'
}
initThemeMode()

const handleClickToggleTheme = async (mode: ThemeMode) => {
  if (mode === 'dark')
    await window.toggleDarkMode()
  else
    await window.toggleLightMode()
}
</script>

<template>
  <a-select
    v-model:value="themeMode"
    style="width: 120px"
    @change="handleClickToggleTheme"
  >
    <a-select-option value="dark">
      暗黑
    </a-select-option>
    <a-select-option value="light">
      高亮
    </a-select-option>
  </a-select>
</template>

