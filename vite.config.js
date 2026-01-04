import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // ✅ THIS IS THE KEY
    environment: "jsdom",
    setupFiles: "./src/jest.setup.js",
    base: "/Advance-client-side-coursework/", // replace REPO_NAME with your repository name
  },
});
