
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/BlasterBot_-Website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 8080
  }
})
