import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambialo si querés otro puerto
  },
  build: {
    outDir: 'build', // Carpeta de salida
  }
})