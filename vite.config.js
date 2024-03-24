import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Chencho34.github.io/MyPortfolio',
  server: {
    // host: '192.168.1.69'
  }
})
