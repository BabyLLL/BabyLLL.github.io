import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// The engine (engine/) and world layouts (world/) speak the same import
// aliases the original importmap used; Vite resolves them here instead.
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: /^@engine\//, replacement: fileURLToPath(new URL('./engine/', import.meta.url)) },
      { find: /^@world\//, replacement: fileURLToPath(new URL('./world/', import.meta.url)) },
      { find: /^@config$/, replacement: fileURLToPath(new URL('./home.config.js', import.meta.url)) },
    ],
  },
  server: {
    port: 5173,
    open: true,
  },
})
