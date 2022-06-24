<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue'

const visible = ref<boolean>(false)
const handleClickSetting = () => {
  visible.value = true
}

// Theme
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
  <div class="w-full h-screen">
    <div class="flex flex-col-reverse py-4 w-48px h-full bg-#0D1117">
      <a-tooltip placement="right">
        <template #title>
          <span>设置</span>
        </template>
        <div class="flex justify-center items-center w-full h-48px cursor-pointer" @click="handleClickSetting">
          <setting-outlined class="text-2xl text-gray" />
        </div>
      </a-tooltip>
    </div>

    <a-modal
      v-model:visible="visible"
      :closable="false"
      :footer="null"
    >
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
    </a-modal>
  </div>
</template>
