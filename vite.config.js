import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio-Website/", //Para ma deploy sa github pages and you need to install npm install gh-pages tas punta ka sa
  plugins: [react()], //package.json
});
