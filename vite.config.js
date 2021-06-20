import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import viteRsw from 'vite-plugin-rsw'

export default defineConfig({
  plugins: [
    reactRefresh(),
    viteRsw({
      crates: ['wasm'],
    }),
  ],
  server: {
    port: 1234,
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
})
