import { cp, mkdir, rm } from "node:fs/promises";

const source = new URL("../dist/client/", import.meta.url);
const destination = new URL("../client/", import.meta.url);

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });

console.log("Prepared Vercel output in client/");