import fs from "fs";
import path from "path";

let mainPath = path.join(import.meta.dirname, "dist/main.js");

let content = fs.readFileSync(mainPath, {
    encoding: "utf-8",
});


fs.chmodSync(mainPath, "777")

fs.writeFileSync(
    mainPath,
    `#!/usr/bin/env node --no-warnings
${content}`,
    {
        encoding: "utf-8",
    },
);

console.info(`Prepended shebang script to cli.`)
