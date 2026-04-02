import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Example for React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})   