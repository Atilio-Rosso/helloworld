import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import solidJs from '@astrojs/solid-js';

export default defineConfig({
  // Configuración básica de Astro
  // Opcional: tu dominio o URL base
  site: 'https://example.com',

  output: 'server',

  // Puedes agregar aquí integraciones como Tailwind, MDX, etc.

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [solidJs()],
});