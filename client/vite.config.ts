import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ["mov-api-e-client.onrender.com", "mov-api-e-server.onrender.com", "0.0.0.0"],
    host:"0.0.0.0",
    port: 3001,
    open: true,
    proxy: {
      "/api": {
        //test local http://localhost:3001
        target: "https://mov-api-e-server.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    "/auth": {
        //test local http://localhost:3001
        target: "https://mov-api-e-server.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: true,
    port: 3000,
  },
});
