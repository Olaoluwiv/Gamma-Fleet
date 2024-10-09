export default defineConfig({
  plugins: [react()],
  base: "/Fleet-management/",
  build: {
    rollupOptions: {
      output: {
        // This ensures that routes fall back to `index.html`
        manualChunks: {
          index: './index.html'
        }
      }
    }
  }
});
