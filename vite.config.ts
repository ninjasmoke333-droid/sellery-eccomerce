import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    // Server options (dev only)
    server: {
      host: "127.0.0.1",          // Force IPv4 to avoid localhost IPv6 issues
      port: 8080,                 // Your preferred port
      hmr: {
        overlay: false,           // Disable error overlay if you prefer
      },
    },

    // Preview options (npm run preview)
    preview: {
      host: "127.0.0.1",          // Same IPv4 fix for preview server
      port: 4173,                 // Default Vite preview port (or change if you want)
    },

    plugins: [
      react(),
      // Only run componentTagger in development (avoids build-time overhead)
      isDev && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        // Modern, clean alias setup using fileURLToPath
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        // Optional: if you ever use "@/components/*" and want trailing slash support
        // "@/": fileURLToPath(new URL("./src/", import.meta.url)),
      },
    },

    // Important for production deploys (Render, Vercel, Netlify, GitHub Pages, etc.)
    base: "/",  // ← Add this! Ensures assets use root-relative paths
  };
});