import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  base: '/M3',
  plugins: [react()],
  server: {
    cors: true,
    // https: true,
  }
})
