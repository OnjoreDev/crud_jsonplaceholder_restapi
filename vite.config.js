import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"https://jsonplaceholder.typicode.com",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: removes '/api' from the path
        headers:{
            Accept:'application/json',
            "Content-type":'application/json',
        }
      }
    }
  }
})
