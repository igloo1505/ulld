import fs from "fs";
import path from "path";
import { detect } from "detect-package-manager";
import { BuildOutputData, PackageManagers } from "../types";
import shell from "shelljs";


let b: BuildOutputData = JSON.parse(
    fs.readFileSync(path.join(import.meta.dirname, "buildDataOutput.json"), {
        encoding: "utf-8",
    }),
);

if (b.buildOutputPath === "not-applied") {
    console.error(
        `Cannot run ulld. It does not appear to have been built successfully.`,
    );
    process.exit(1);
}

const commands: Record<PackageManagers, string> = {
    npm: "npm run ulldStart",
    pnpm: "pnpm ulldStart",
    yarn: "yarn run ulldStart",
};


(async () => {

    let pm = await detect({
        cwd: b.buildOutputPath,
    });

    if (pm === "bun") {
        console.error("Ulld does not support bun yet. We can't run this app.");
        process.exit(1);
    }

    let cmd = commands[pm];

    shell.exec(cmd, {
        cwd: b.buildOutputPath,
    });
})();
