import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/pdfme-generator.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
