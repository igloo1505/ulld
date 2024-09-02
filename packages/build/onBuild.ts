import fs from "fs";
import path from "path";

const pathsToPrepend = [
    "dist/main.js",
    "dist/run/main.js"
];

const prependShebang = (_p: string) => {
    let p = path.join(import.meta.dirname, _p);
    let content = fs.readFileSync(p, {
        encoding: "utf-8",
    });

    fs.chmodSync(p, "777");

    fs.writeFileSync(
        p,
        `#!/usr/bin/env node --no-warnings
${content}`,
        {
            encoding: "utf-8",
        },
    );

    console.info(`Prepended shebang script to cli.`);
};

for (const p of pathsToPrepend) {
    prependShebang(p);
}
