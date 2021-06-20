import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import ViteRsw from 'vite-plugin-rsw'

export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteRsw({
      crates: ['wasm-test'],
    }),
  ],
  server: {
    port: 1234,
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
})
