import fs from "node:fs";
import path from "node:path";

const cssPath = path.resolve("src/style.css");
const outPath = path.resolve("src/_css.js");

const css = fs.readFileSync(cssPath, "utf8");

const js = `// auto-generated from src/style.css
const css = String.raw\`${css}\`;
export default css;
`;

fs.writeFileSync(outPath, js, "utf8");
console.log("[codeblock] generated src/_css.js");
