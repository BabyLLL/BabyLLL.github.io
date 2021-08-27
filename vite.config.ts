import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), WindiCSS()],

  resolve: {
    alias: [{ find: '/~/', replacement: `${resolve(__dirname, 'src')}/` }]
  },

  build: {
    outDir: 'docs'
  }
})
