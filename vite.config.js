import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import path from 'path'
import tailwindcss from "@tailwindcss/vite"

const require = createRequire(import.meta.url)
const postcssConfig = require('./postcss.config.cjs')

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: postcssConfig
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      '@': path.resolve(fileURLToPath(import.meta.url), '../src')
    }
  }
}))
