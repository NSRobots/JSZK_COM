// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
// import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'http://localhost:4321',
  base: '/',  // 确保这里是根路径
  vite: {
    resolve: {
      tsconfigPaths: true, 
    },
    plugins: [tailwindcss()],
  },
});