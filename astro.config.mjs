// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: { resolve: {
      tsconfigPaths: true,
    },
    plugins: [tailwindcss()],
  },
});