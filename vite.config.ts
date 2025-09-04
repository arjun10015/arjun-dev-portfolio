import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // ✅ Local = "/", Production = GitHub Pages path
  base: mode === "production" ? "/arjun-dev-portfolio/" : "/",
  server: {
    host: "localhost",
    port: 5173, // change to 8080 if you prefer
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
