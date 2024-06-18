import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'kaboom': 'node_modules/kaboom/dist/kaboom.min.js', // Ruta al archivo kaboom.min.js
    },
  },
})


