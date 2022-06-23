import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/index.css'
import 'uno.css'
import './samples/node-api'

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)

// Toggle theme
document.getElementById('toggle-dark-mode')!.addEventListener('click', async () => {
  const isDarkMode: any = await window.toggleDarkMode()
  document.getElementById('theme-source')!.innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system')!.addEventListener('click', async () => {
  await window.systemDarkMode()
  document.getElementById('theme-source')!.innerHTML = 'System'
})
