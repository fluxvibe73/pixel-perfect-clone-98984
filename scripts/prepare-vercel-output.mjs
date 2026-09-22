import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const output = new URL("../.vercel/output/", import.meta.url);
const staticOutput = new URL("./static/", output);

await rm(output, { recursive: true, force: true });
await mkdir(staticOutput, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), staticOutput, {
  recursive: true,
});

await writeFile(
  new URL("./config.json", output),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { src: "/", dest: "/index.html" },
        { src: "/work/?", dest: "/work/index.html" },
        { src: "/services/?", dest: "/services/index.html" },
        { src: "/about/?", dest: "/about/index.html" },
        { src: "/contact/?", dest: "/contact/index.html" },
        { handle: "filesystem" },
      ],
    },
    null,
    2,
  ),
);

console.log("Prepared Vercel Build Output API package in .vercel/output");