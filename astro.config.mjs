import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    // Configuración básica de Astro
    site: 'https://example.com', // Opcional: tu dominio o URL base
    // Puedes agregar aquí integraciones como Tailwind, MDX, etc.

    vite: {
        plugins: [tailwindcss()],
    },
});