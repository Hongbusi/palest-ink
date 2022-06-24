<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

const visible = ref<boolean>(false)
const handleClickSetting = () => {
  visible.value = true
}
</script>

<template>
  <a-tooltip placement="right">
    <template #title>
      <span>设置</span>
    </template>
    <div class="flex justify-center items-center w-full h-48px cursor-pointer" @click="handleClickSetting">
      <setting-outlined class="text-2xl text-gray" />
    </div>
  </a-tooltip>

  <a-modal
    v-model:visible="visible"
    :closable="false"
    :footer="null"
  >
    <toggle-theme />
  </a-modal>
</template>
