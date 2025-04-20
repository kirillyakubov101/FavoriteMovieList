import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <-- allows using `test`, `expect`, etc. globally
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // you can create this file for setup like jest-dom
  },
});
