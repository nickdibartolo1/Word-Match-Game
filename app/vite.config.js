// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import dns from 'dns'


// // dns.setDefaultResultOrder('verbatim');

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: 'localhost',
//     port: 3000
//   }, build: {
//     outDir: 'dist'
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import html from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    // html()
  ],
  server: {
    host: 'localhost',
    port: 3000
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      }
    }
  }
});

