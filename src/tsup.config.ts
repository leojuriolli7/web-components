import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig({
  entry: ['index.ts'],
  dts: true,
  // minify: true,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  format: 'cjs',
  inject: ['./react-shim.js'],
  loader: {
    // transform fonts and images into dataurls.
    '.svg': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.ttf': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.gif': 'dataurl'
  }
})
