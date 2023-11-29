import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-plugin-svgo'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue(), svg()],
})
