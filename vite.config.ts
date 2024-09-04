import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@Presentation": path.resolve(__dirname, "./src/Presentation"),
      "@Assets": path.resolve(__dirname, "./src/Assets"),
      "@Domain": path.resolve(__dirname, "./src/Domain"),
      "@Data": path.resolve(__dirname, "./src/Data"),
      "@lib": path.resolve(__dirname, "./src/lib" ),
      "@components": path.resolve(__dirname, "./src/components")
    },
  },
  plugins: [react()],
});
