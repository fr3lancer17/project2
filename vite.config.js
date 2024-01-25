import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactMaterialize from 'react-materialize'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-materialize', 'react-dom/client'],
    },
  },
})
