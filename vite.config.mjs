import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/resume-pdf/',   // 👈 repo name (important for GitHub Pages)
})
