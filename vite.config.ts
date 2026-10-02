// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const isVercel = !!process.env["VERCEL"];

export default defineConfig({
  nitro: {
    // On Vercel, emit the Build Output API package (static pages + SSR
    // function); Lovable keeps its normal worker package.
    preset: isVercel ? "vercel" : "cloudflare-module",
    ...(isVercel
      ? {
          hooks: {
            // The config wrapper replaces the preset's own `compiled` hook, so
            // write Vercel's required config files here.
            async compiled(nitro: { options: { output: { dir: string; serverDir: string } } }) {
              const { dir, serverDir } = nitro.options.output; console.log("[vercel-hook]", dir, serverDir);
              await mkdir(serverDir, { recursive: true });
              await writeFile(
                join(dir, "config.json"),
                JSON.stringify(
                  {
                    version: 3,
                    routes: [{ handle: "filesystem" }, { src: "/(.*)", dest: "/__server" }],
                  },
                  null,
                  2,
                ),
              );
              await writeFile(
                join(serverDir, ".vc-config.json"),
                JSON.stringify(
                  {
                    runtime: "nodejs22.x",
                    handler: "index.mjs",
                    launcherType: "Nodejs",
                    shouldAddHelpers: false,
                    supportsResponseStreaming: true,
                  },
                  null,
                  2,
                ),
              );
            },
          },
        }
      : {}),
  },
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
