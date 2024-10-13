import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Fleet-management/' : '/', // Use '/' for local dev and '/Fleet-management/' for GitHub Pages
  };
});