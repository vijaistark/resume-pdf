import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/resume-pdf/', // use '/<repo-name>/' exactly
  plugins: [react()],
});
