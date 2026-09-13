import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react({}),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
  ],

  server: {
    port: 3000,
    host: true,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
});
