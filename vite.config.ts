import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      cert: fs.readFileSync(process.env.SSL_CRT || 'site.crt'),
      key: fs.readFileSync(process.env.SSL_KEY || 'site.key'),
    },
    port: process.env.TODO_PORT,
    host: process.env.TODO_HOST,
  }
})
