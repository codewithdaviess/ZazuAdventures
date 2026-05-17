import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Avoid writing Vite caches under node_modules (can be blocked in some Windows setups).
  cacheDir: ".vite-cache",
  plugins: [react(), tailwindcss()],
})
