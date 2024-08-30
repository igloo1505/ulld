import fs from "fs";
import path from "path";
import { detect } from "detect-package-manager";
import type { BuildOutputData, PackageManagers } from "../types.js";
import shell from "shelljs";
import { getBuildDataOutputPath, getXdgPaths } from "../utils/getXdgPaths.js";

const commands: Record<PackageManagers, string> = {
    npm: "npm run ulldStart",
    pnpm: "pnpm ulldStart",
    yarn: "yarn run ulldStart",
};

export const runUlldApplication = async () => {
    let buildDataPath = getBuildDataOutputPath()
    if(!fs.existsSync(buildDataPath)){
        console.error(`Cannot run ulld application. The automatically generated build data file cannot be found. You'll have to run ULLD manually.`)
        process.exit(1)
    }

    let b: BuildOutputData = JSON.parse(
        fs.readFileSync(buildDataPath, {
            encoding: "utf-8",
        }),
    );

    if (!b.buildOutputPath) {
        console.error(
            `Build data file is improperly formatted. You'll have to run ULLD manually.`,
        );
        process.exit(1);
    }

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
        async: true
    }, (code, stdout, stderr) => {
        console.log(stdout)
    });

}
