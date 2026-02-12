import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/signup': {
        target: 'https://mediscope-ai-server.onrender.com',
        changeOrigin: true,
      },
      '/login': {
        target: 'https://mediscope-ai-server.onrender.com',
        changeOrigin: true,
      },
      '/process': {
        target: 'https://mediscope-ai-server.onrender.com',
        changeOrigin: true,
      },
      '/api': {
        target: 'https://mediscope-ai-server.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
