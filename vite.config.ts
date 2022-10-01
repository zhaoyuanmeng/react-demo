import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "vv",
        replacement: path.resolve(__dirname, "src/views"),
      },
      {
        find: "api",
        replacement: path.resolve(__dirname, "src/api"),
      },
      {
        find: "cc",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
});
