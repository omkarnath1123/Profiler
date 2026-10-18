import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Served from https://omkarnath1123.github.io/Profiler/
export default defineConfig({
  base: "/Profiler/",
  plugins: [react()],
});
