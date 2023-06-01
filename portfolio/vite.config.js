import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500000,
    outDir: "build",
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});
