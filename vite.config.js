import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Gamma-Fleet/' : '/', // Use '/Gamma-Fleet/' for GitHub Pages
  };
});
