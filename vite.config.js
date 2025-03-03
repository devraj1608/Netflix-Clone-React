import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-Clone-React/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Added react-router-dom for chunking
          // You can add more chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size limit as needed
  },
})
