import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    https: false,
    host: `localhost`,
    port: 4040,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
})
