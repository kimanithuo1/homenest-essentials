import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    minify: "terser",
    sourcemap: true,
  },
});
