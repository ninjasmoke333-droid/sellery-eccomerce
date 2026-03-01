import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      host: "127.0.0.1",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    preview: {
      host: "127.0.0.1",
      port: 4173,
    },
    plugins: [
      react(),
      isDev && componentTagger(),
      {
        name: "copy-redirects",
        closeBundle() {
          fs.writeFileSync("dist/_redirects", "/*    /index.html   200");
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    base: "/",
    build: {
      rollupOptions: {
        input: "./index.html",
      },
    },
    publicDir: "public",
  };
});