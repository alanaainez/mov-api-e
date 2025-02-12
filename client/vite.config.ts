import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3001,
    open: true,
    host:"0.0.0.0",
    
    proxy: {
      '/api': {
        target: 'https://mov-api-e-server.onrender.com',
        changeOrigin: true,
        secure: true,
      },
      '/auth': {
        target: 'https://mov-api-e-server.onrender.com',
        changeOrigin: true,
        secure: true
      },
    },
  },
  preview: {
    host: true,
    port: 3000,
  },
});
