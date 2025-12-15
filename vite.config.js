import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repository subpath, set `base`.
  // Use the repository's exact name (case-sensitive) or use a relative base.
  // Repo name is `My-Bio-Profile`, so set base accordingly so assets load correctly.
  base: "/My-Bio-Profile/",
});
