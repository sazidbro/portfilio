import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          education: path.resolve(__dirname, 'education.html'),
          skills: path.resolve(__dirname, 'skills.html'),
          work: path.resolve(__dirname, 'work.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      // HMR can be disabled via the DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
