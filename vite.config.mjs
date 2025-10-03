// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/resume-pdf/', // replace with your repo name
  plugins: [react()],
});
