import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Explicit alias so Linux resolves '@/...' imports correctly
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Increase chunk size warning limit (avoids noisy Vercel log output)
    chunkSizeWarningLimit: 1000,
  },
})
