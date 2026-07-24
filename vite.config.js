import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
<<<<<<< HEAD
  base: "/"
=======
  base: '/',
>>>>>>> 4ac0483 (readme)
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    port: 3000,
    host: true
  }
});
