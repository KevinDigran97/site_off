import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/git getting started
export default defineConfig({
  plugins: [react()],
})
