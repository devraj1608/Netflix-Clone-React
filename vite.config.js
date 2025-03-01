import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Define your manual chunks here
          // Example: vendor: ['react', 'react-dom']
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size limit as needed
  },
})
