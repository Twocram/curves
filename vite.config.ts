import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/curves/",
  server: {
    port: 8000,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
      {
        find: "@assets",
        replacement: "/src/assets",
      },
      {
        find: "@shared",
        replacement: "/src/shared",
      },
      {
        find: "@widgets",
        replacement: "/src/widgets",
      },
      {
        find: "@utils",
        replacement: "/src/utils",
      },
    ],
  },
});
