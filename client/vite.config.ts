import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: ["https://mov-api-e-client.onrender.com", "https://mov-api-e-server.onrender.com", "0.0.0.0"],
    port: 3001,
    open: true,
    host:"0.0.0.0",
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
