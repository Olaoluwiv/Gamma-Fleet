// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Fleet-management/", // Set the base URL to match your repository name
  plugins: [react()],
});
