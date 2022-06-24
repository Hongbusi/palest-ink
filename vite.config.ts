import { rmSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron/renderer'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': join(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      imports: [
        'vue'
      ]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ]
    }),
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: {
          build: {
            sourcemap: false,
            outDir: 'dist/electron/main'
          }
        }
      },
      preload: {
        input: {
          // You can configure multiple preload here
          splash: join(__dirname, 'electron/preload/splash.ts')
        },
        vite: {
          build: {
            // For debug
            sourcemap: 'inline',
            outDir: 'dist/electron/preload'
          }
        }
      }
    }),
    // Enable use Electron, Node.js API in Renderer-process
    renderer()
  ]
})
