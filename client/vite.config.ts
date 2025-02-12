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
    
    
  },
  preview: {
    host: true,
    port: 3000,
  },
});
