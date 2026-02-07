import { defineConfig } from 'vite'

export default defineConfig({
  base: './',       // <- This is the key for GitHub Pages
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443
    }
  }
})
