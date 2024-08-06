import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'MyComponent',
      fileName: (format) => `my-component.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      plugins: [
        // ランタイムで process.env.NODE_ENV を参照する箇所を置換する
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
          preventAssignment: true
        })
      ]
    },
  }
})
