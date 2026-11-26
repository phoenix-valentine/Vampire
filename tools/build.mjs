// Joins the source files into one HTML file.
//   dist/vampire.html       the build people play (no test tools inside)
//   dist/vampire-test.html  the same game plus the test API and autopilot
//   dist/vampire-embed.html the same game as page content only, for a host page
import esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

async function bundle(test) {
  const result = await esbuild.build({
    entryPoints: [path.join(root, "src/app/main.js")],
    bundle: true,
    format: "iife",
    target: ["safari15", "chrome100"],
    write: false,
    minify: false,
    legalComments: "none",
    define: {
      __TEST__: test ? "true" : "false",
      __VERSION__: JSON.stringify(pkg.version),
    },
  });
  return result.outputFiles[0].text;
}

function parts(script) {
  return {
    style: fs.readFileSync(path.join(root, "src/style.css"), "utf8"),
    body: fs.readFileSync(path.join(root, "src/body.html"), "utf8").replace(/__VERSION__/g, pkg.version),
    script: script.replace(/<\/script/gi, "<\\/script"),
  };
}

// A complete page, for opening directly or uploading to a game site.
function page(script) {
  const p = parts(script);
  const template = fs.readFileSync(path.join(root, "src/index.html"), "utf8");
  return template
    .replace("/*STYLE*/", () => p.style)
    .replace("/*BODY*/", () => p.body)
    .replace("/*SCRIPT*/", () => p.script);
}

// The same game as page content only, for hosts that supply their own page around it.
function fragment(script) {
  const p = parts(script);
  return `<title>Vampire: No Survivors</title>\n<style>\n${p.style}\n</style>\n${p.body}\n<script>\n${p.script}\n</script>\n`;
}

export async function build() {
  fs.mkdirSync(path.join(root, "dist"), { recursive: true });
  const release = page(await bundle(false));
  const test = page(await bundle(true));
  fs.writeFileSync(path.join(root, "dist/vampire.html"), release);
  fs.writeFileSync(path.join(root, "dist/vampire-test.html"), test);
  fs.writeFileSync(path.join(root, "dist/vampire-embed.html"), fragment(await bundle(false)));
  return { version: pkg.version, releaseBytes: release.length, testBytes: test.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const info = await build();
  console.log(`built v${info.version}: vampire.html ${(info.releaseBytes / 1024).toFixed(1)} KB, vampire-test.html ${(info.testBytes / 1024).toFixed(1)} KB`);
}
