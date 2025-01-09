import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/auth/google": {
    //     target: "http://localhost:8000",
    //     changeOrigin: true,
    //   },
    // },
    port: 3000,
  },
  // absolute path import
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
