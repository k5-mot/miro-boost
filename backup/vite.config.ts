import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@/", replacement: `${__dirname}/src/` },
      { find: "styled-system", replacement: `${__dirname}/styled-system` },
    ],
  },
});
