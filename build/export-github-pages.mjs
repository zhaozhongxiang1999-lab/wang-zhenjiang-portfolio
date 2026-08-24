import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputRoot = process.argv[2];

if (!outputRoot) {
  throw new Error("Usage: node build/export-github-pages.mjs <output-directory>");
}

const workerUrl = pathToFileURL(
  path.resolve("dist/server/index.js"),
);
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const routes = [
  { pathname: "/", relativeFile: "index.html" },
  { pathname: "/motion", relativeFile: "motion/index.html" },
  { pathname: "/work/cdn", relativeFile: "work/cdn/index.html" },
  { pathname: "/work/guihe", relativeFile: "work/guihe/index.html" },
  { pathname: "/work/poster", relativeFile: "work/poster/index.html" },
  { pathname: "/work/type", relativeFile: "work/type/index.html" },
  { pathname: "/work/xiaoxiao", relativeFile: "work/xiaoxiao/index.html" },
];

const environment = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const context = {
  waitUntil() {},
  passThroughOnException() {},
};

for (const { pathname, relativeFile } of routes) {
  const response = await worker.fetch(
    new Request(new URL(pathname, "https://zhaozhongxiang1999-lab.github.io"), {
      headers: { accept: "text/html" },
    }),
    environment,
    context,
  );

  if (!response.ok) {
    throw new Error(`${pathname} returned ${response.status}`);
  }

  const html = await response.text();
  const destination = path.join(outputRoot, relativeFile);

  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html, "utf8");
  console.log(`Exported ${pathname} -> ${relativeFile}`);
}

await writeFile(path.join(outputRoot, "404.html"), await (await worker.fetch(
  new Request("https://zhaozhongxiang1999-lab.github.io/", {
    headers: { accept: "text/html" },
  }),
  environment,
  context,
)).text(), "utf8");
