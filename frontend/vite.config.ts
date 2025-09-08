import react from "@vitejs/plugin-react";
import dns from "dns";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder("verbatim");

// make sure vite picks up all html files in root, needed for vite build
const allHtmlEntries = fs
  .readdirSync(".")
  .filter((file) => path.extname(file) === ".html")
  .reduce(
    (acc, file) => {
      acc[path.basename(file, ".html")] = path.resolve(__dirname, file);

      return acc;
    },
    {} as Record<string, string>,
  );

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: allHtmlEntries,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@styled-system": path.resolve(__dirname, "styled-system"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
