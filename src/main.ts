import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './samples/node-api'

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)
