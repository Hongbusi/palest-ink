<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue'

const visible = ref<boolean>(false)
const handleClickSetting = () => {
  visible.value = true
}

const handleClickToggleTheme = async () => {
  await window.toggleDarkMode()
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
      <a-button @click="handleClickToggleTheme">
        切换主题
      </a-button>
    </a-modal>
  </div>
</template>
