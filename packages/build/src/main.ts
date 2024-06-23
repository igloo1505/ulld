// import dotenv from "dotenv";
// dotenv.config({path: "../.env.local"})
import { program } from "commander";
import { verifyDirectory } from "./stages/verifyDirectory";
import fs from "fs";
import { UlldBuildProcess } from "./classes/build";
import { log } from "console";

const isLocalDev = true

program.option("--noPlugins").option("--here");

program.parse();

const options = program.opts();

(async () => {
    try {
        let targetDirectory = await verifyDirectory(options.here);
        if (!targetDirectory || !fs.existsSync(targetDirectory)) {
            log(`You need to specify a directory to continue.`);
            process.exit(1);
        }

        let build = new UlldBuildProcess(targetDirectory);
        let success = false;
        !isLocalDev && (success = await build.createBaseProject()); // alpha
        if (isLocalDev || success) {
            build.packageJson.gather(); // alpha
            await build.gatherAppConfig(); // beta
            await build.gatherPlugins(); // alpha
            await build.checkPluginValidity(); //beta
            !isLocalDev && await build.packageJson.installDependencies(); //beta
            await build.resolveSlotConflicts(); // beta
        }
    } catch (err) {
        if (!err) {
            log(`No worries. We can handle this later.`);
        }
    }
})();
