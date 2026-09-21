// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Vercel requires its native Build Output API layout. The Lovable preview
  // keeps its Cloudflare target, while Vercel CI writes .vercel/output.
  nitro: process.env["VERCEL"]
    ? { preset: "vercel" }
    : { preset: "cloudflare-module" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every page to static HTML so the build also works on static hosts
    // (e.g. Netlify publishing dist/client) in addition to the Lovable deploy.
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }: { path: string }) => !path.startsWith("/api"),
    },
    pages: [
      { path: "/" },
      { path: "/work" },
      { path: "/services" },
      { path: "/about" },
      { path: "/contact" },
    ],
  },
});
