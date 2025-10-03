import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/resume-pdf/',
  build: { outDir: 'docs' },
  plugins: [react()],
});
