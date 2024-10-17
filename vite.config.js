import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Gamma-Fleet/' : '/', // Use '/' for local dev and '/Gamma-Fleet/' for GitHub Pages
  };
});
