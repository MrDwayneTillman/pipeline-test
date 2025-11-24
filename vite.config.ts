import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

const isProd = process.env.BUILD_MODE === 'prod'

export default defineConfig({
  base: './',

  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    }),
  ],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: /^three\/addons\/(.*)/, replacement: 'three/examples/jsm/$1' },
      { find: 'OrbitControls', replacement: 'three/examples/jsm/controls/OrbitControls.js' },
      { find: 'GLTFLoader', replacement: 'three/examples/jsm/loaders/GLTFLoader.js' },
    ],
  },
})